// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import styles from "../Components/Checkout.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/LOGO 1.png";
import caart from "../assets/Group 58.png";
import user from "../assets/User.png";
import loocation from "../assets/Location.png";
import logo2 from "../assets/LOGO 2.png";
import appstore from "../assets/appstore.png";
import facebookIcon from "../assets/Facebook.png";
import instagramIcon from "../assets/Instagram.png";
import tiktokIcon from "../assets/Tiktok.png";
import SnapchatIcon from "../assets/Snapchat.png";
import head from "../assets/Frame 97.png";
import Label from "../assets/Label.png";
import Arrow from "../assets/ArrowRight.png";
function Checkout() {
  const [isCartVisible, setCartVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [secondMenu, setSecondMenu] = useState([]);
  const [thirdMenu, setThirdMenu] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const location = useLocation();
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const totalValue = cart.reduce(
    (total, item) =>
      total + parseFloat(item.price.replace("₹", "").trim()) * item.quantity,
    0
  );
  const salesTax = totalValue > 100 ? 10 : 0;
  const subtotal = totalValue + salesTax;
  const handlePayment = () => {
    setCart([]); 
    localStorage.removeItem("cart"); 
    navigate("/payment", { state: { subtotal,cart } });
  };
  
  useEffect(() => {
    if (location.state && location.state.cart) {
      setCart(location.state.cart);
    }
  }, [location.state]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/auth/restaurants")
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((error) => {
        console.error("Error fetching restaurant images:", error);
      });
  }, []);
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
  const handleRestaurantClick = () => {
    navigate("/restaurantMenu");
  };
  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:5000/api/auth/menu1"),
      axios.get("http://localhost:5000/api/auth/menu2"),
    ])
      .then(([responseMenu1, responseMenu2]) => {
        setSecondMenu(responseMenu1.data);
        setThirdMenu(responseMenu2.data);
      })
      .catch((error) => {
        console.error("Error fetching menu items:", error);
      });
  }, []);
  return (
    <div className={styles.homecontainer}>
      <header className="header">
        <div className={styles.location}>
          <span className={styles.offer}>
            🌟 Get 5% Off your first order,<a href="#">Promo: ORDER5</a>
          </span>
          <span className={styles.add}>
            <img src={loocation} className={styles.address}></img>Regent Street,
            Ad, A4201, London
          </span>
          <a href="#" className={styles.changelocation}>
            Change Location
          </a>
          <img
            src={caart}
            className={styles.cart}
            alt="cart"
            onClick={() => setCartVisible(!isCartVisible)}
          />
        </div>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Order UK" className={styles.logo} />
          <nav className={styles.navLinks}>
            <ul className={styles.navList}>
              <li>
                <a href="/home" className={styles.navItem}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" className={styles.navItem}>
                  Browse Menu
                </a>
              </li>
              <li>
                <a href="#" className={styles.navItem}>
                  Special Offers
                </a>
              </li>
              <li>
                <a href="#" className={styles.navItem}>
                  Restaurants
                </a>
              </li>
              <li>
                <a href="#" className={styles.navItem}>
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className={styles.navLastItem}onClick={()=>navigate("/profile")}>
                  <img src={user} className={styles.user}></img> Hey{" "}
                  {username ? username : "Guest"}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div>
        <img
          src={head}
          alt="heading"
          className={styles.head}
          onClick={() => navigate("/restaurantMenu")}
        ></img>
        <div className={styles.orderContainer}>
          <div className={styles.orderDetails}>
            <div className={styles.orderItems}>
              {cart && cart.length > 0 ? (
                cart.map((item, index) => (
                  <div key={index} className={styles.orderItem}>
                    <div className={styles.items}>
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className={styles.itemImage}
                      />
                      <div>
                        <p className={styles.name}>{item.name}</p>
                        <span className={styles.quantity}>
                          {item.quantity}x items
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className={styles.price}>
                        ₹{parseInt(item.price.replace("₹", "").trim(), 10)}
                      </p>
                    </div>
                    <hr />
                  </div>
                ))
              ) : (
                <p>Your cart is empty.</p>
              )}
              <input
                type="text"
                className={styles.input}
                placeholder="Add Order Notes"
              ></input>
            </div>
          </div>
          <div className={styles.orderSummary}>
            <div className={styles.imageContainer}>
              <img src={Label} className={styles.Label} alt="label" />
              <img src={Arrow} className={styles.Arrow} alt="arrow" onClick={()=>navigate("/address")}/>
            </div>
            <hr />
            <p className={styles.calculation}>Items:₹{totalValue}</p>
            <p className={styles.calculation}>Sales Tax: ₹{salesTax}</p>
            <hr />
            <p className={styles.subtotal}>Subtotal: ₹{subtotal}</p>
            <button className={styles.payment} onClick={()=>(handlePayment())}>Choose Payment Method</button>
          </div>
        </div>
      </div>
      <section className={styles.similarrestaurantssection}>
        <h3 className={styles.similarres}>Similar Restaurants</h3>
        <div className={styles.restaurantList}>
          {restaurants.length > 0 ? (
            restaurants.map((url, index) => (
              <div
                key={index}
                className={styles.restaurantItem}
                onClick={() => handleRestaurantClick(index)}
              >
                <img
                  src={url}
                  alt={`Restaurant ${index + 1}`}
                  className={styles.restaurantImage}
                />
              </div>
            ))
          ) : (
            <p>Loading restaurants...</p>
          )}
        </div>
      </section>
      <div className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.leftSection}>
            <img src={logo2} alt="Order UK Logo" className={styles.logo2} />
            <div className={styles.appStoreSection}>
              <img
                src={appstore}
                alt="Download on the App Store"
                className={styles.appStoreImage}
              />
            </div>
            <div className={styles.companyInfo}>
              <span>Company # 490039-445, Registered with</span>
              <br />
              <span>House of companies.</span>
            </div>
          </div>

          <div className={styles.centerSection}>
            <h4>Get Exclusive Deals in your Inbox</h4>
            <div className={styles.subscribe}>
              <input
                type="email"
                placeholder="your@email.com"
                className={styles.emailInput}
              />
              <button className={styles.subscribeButton}>Subscribe</button>
            </div>
            <p className={styles.policyText}>
              We won&apos;t spam, read our <a href="#privacy-policy">email policy</a>
            </p>
            <div className={styles.socialIcons}>
              <a href="#facebook">
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className={styles.socialIcon}
                />
              </a>
              <a href="#instagram">
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className={styles.socialIcon}
                />
              </a>
              <a href="#tiktok">
                <img
                  src={tiktokIcon}
                  alt="TikTok"
                  className={styles.socialIcon}
                />
              </a>
              <a href="#snapchat">
                <img
                  src={SnapchatIcon}
                  alt="Snapchat"
                  className={styles.socialIcon}
                />
              </a>
            </div>
          </div>

          <div className={styles.rightSection}>
            <ul className={styles.legalLinks}>
              <h4>Legal Pages</h4>
              <li>
                <a href="#terms">Terms and Conditions</a>
              </li>
              <li>
                <a href="#privacy">Privacy</a>
              </li>
              <li>
                <a href="#cookies">Cookies</a>
              </li>
              <li>
                <a href="#modern-slavery">Modern Slavery Statement</a>
              </li>
            </ul>

            <ul className={styles.legalLinks}>
              <h4>Important Links</h4>
              <li>
                <a href="#help">Get Help</a>
              </li>
              <li>
                <a href="#add-restaurant">Add your restaurant</a>
              </li>
              <li>
                <a href="#sign-up-deliver">Sign up to deliver</a>
              </li>
              <li>
                <a href="#create-business">Create a business account</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>Order.uk Copyright 2024. All Rights Reserved.</p>
        <div className={styles.footerLinks}>
          <a href="#privacy-policy">Privacy Policy</a>
          <a href="#terms">Terms</a>
          <a href="#pitching">Pitching</a>
          <a href="#do-not-sell">
            Do not sell or share my personal information
          </a>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

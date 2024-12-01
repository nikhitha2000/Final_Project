// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useRef } from "react";
import styles from "../Components/RestaurantMenu.module.css";
import axios from "axios";
import logo from "../assets/LOGO 1.png";
import user from "../assets/User.png";
import location from "../assets/location.png";
import resbg from "../assets/resbg.png";
import ordercompleted from "../assets/Order Completed.png";
import Motocross from "../assets/Motocross.png";
import food from "../assets/Rectangle 44.png";
import "leaflet/dist/leaflet.css";
import logo2 from "../assets/LOGO 2.png";
import appstore from "../assets/appstore.png";
import facebookIcon from "../assets/Facebook.png";
import instagramIcon from "../assets/Instagram.png";
import tiktokIcon from "../assets/TikTok.png";
import SnapchatIcon from "../assets/Snapchat.png";
import ratings from "../assets/Rectangle 64.png";
import cart from "../assets/Group 58.png";
import sidearrow from "../assets/Group 57.png";
import rightarrow from "../assets/Group 56.png";
import clock from "../assets/Clock.png";
import first from "../assets/Group 23.png";
import second from "../assets/Group 43.png";
import third from "../assets/Group 44.png";
import add from "../assets/Plus.png";
import tracking from "../assets/Tracking.png";
import id from "../assets/ID Verified.png";
import clock1 from "../assets/Clock1.png";
import review1 from "../assets/Group 53.png";
import review2 from "../assets/Group 54.png";
import review3 from "../assets/Group 55.png";
import deleteIcon from "../assets/Remove.png";
import L from "leaflet";
import { useNavigate } from "react-router-dom";
function RestaurantMenu() {
  const [username, setUsername] = useState("");
  const [menuItems, setMenuItems] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [carrt, setCart] = useState([]); 
  const [secondMenu,setSecondMenu] = useState([]);
  const [thirdMenu,setThirdMenu] = useState([]);
  const [isCartVisible, setCartVisible] = useState(false);
  const [searchTerm,setsearchTerm] = useState("");
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/auth/menu")
      .then((response) => {
        setMenuItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching menu items:", error);
      });
  }, []);
  const addItemToCart = (item) => {
    const existingItem = carrt.find((cartItem) => cartItem.name === item.name);
    if (existingItem) {
      setCart(
        carrt.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...carrt, { ...item, quantity: 1 }]);
    }
    setCartVisible(true);
  };
  const removeItemFromCart = (itemToRemove) => {
    setCart(cart.filter(item => item.name !== itemToRemove.name));
  };
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
  const handleRestaurantClick = () => {
    navigate("/restaurantMenu");
  };
  useEffect(() => {
    if (mapInstance.current) return;
    mapInstance.current = L.map(mapRef.current).setView([51.5074, -0.1278], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapInstance.current);
    const marker = L.marker([51.5074, -0.1278]).addTo(mapInstance.current);
    marker.bindPopup(`
      <div className={styles.popup}>
        <h3>McDonald's</h3><span>South London</span>
        <p className={styles.address}>Tooley St, London Bridge, London SE1 2TF, United Kingdom</p>
        <p className = {styles.phone}>Phone number: <a href="tel:+934443-43">+934443-43</a></p>
        <p className={styles.website}>Website: <a href="http://mcdonalds.uk/" target="_blank">http://mcdonalds.uk/</a></p>
      </div>
    `);
  }, []);
  const filteredItems = menuItems.filter((item) => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setsearchTerm(e.target.value);
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
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
  const handleCheckout = () => {
    navigate("/checkout",{ state: { cart: carrt } });
  };
  const renderCartSection = () => {
    return (
      isCartVisible && (
        <section className={styles.cartSection}>
          <h2>My Basket</h2>
          <div className={styles.cartItems}>
            {carrt.length > 0 ? (
              carrt.map((item, index) => (
                <div key={index} className={styles.cartItem}>
                  <p>{item.name}</p>
                  <p>Quantity: {item.quantity}x</p>
                  <p>Price: {item.price} x {item.quantity} = {item.price * item.quantity}</p>
                  <img
                  src={deleteIcon}
                  alt="Delete"
                  className={styles.deleteIcon}
                  onClick={() => removeItemFromCart(item)}
                />
                </div>
              ))
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>
          <div className={styles.cartTotal}>
            <p>
              Total: ₹
              {carrt.reduce((total, item) => total + item.price * item.quantity, 0)}
            </p>
          </div>
          <div className={styles.checkout}>
            <button onClick={handleCheckout}>Checkout</button>
            </div>
        </section>
      )
    );
  };
  return (
    <div className="home-container">
      <header className="header">
        <div className={styles.location}>
          <span className={styles.offer}>
            🌟 Get 5% Off your first order,<a href="#">Promo: ORDER5</a>
          </span>
          <span className={styles.add}>
            <img src={location} className={styles.address}></img>Regent Street,
            Ad, A4201, London
          </span>
          <a href="#" className={styles.changelocation}>
            Change Location
          </a>
          <img src={cart} className={styles.cart} alt="cart" onClick={() => setCartVisible(!isCartVisible)} />
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
                <a href="#" className={styles.navFirstItem}>
                  Restaurants
                </a>
              </li>
              <li>
                <a href="#" className={styles.navItem}>
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className={styles.navLastItem} onClick={()=>navigate("/profile")}>
                  <img src={user} className={styles.user}></img> Hey{" "}
                  {username ? username : "Guest"}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className={styles.restaurantSection}>
        <div className={styles.restaurantImageWrapper}>
          <img
            src={resbg}
            alt="Restaurant background"
            className={styles.resbg}
          />
          <div className={styles.restaurantInfo}>
            <span className={styles.tagline}>I&apos;m lovin&apos; it!</span>
            <h2>McDonald&apos;s East London</h2>
            <div className={styles.deliverycontainer}>
              <p className={styles.minimumOrder}>
                <img
                  src={ordercompleted}
                  className={styles.ordercompleted}
                  alt="ordercompleted"
                ></img>
                Minimum Order: 12 GBP
              </p>
              <p className={styles.deliveryTime}>
                <img
                  src={Motocross}
                  className={styles.Motocross}
                  alt="Motorcross image"
                ></img>
                Delivery in 20-25 Minutes
              </p>
            </div>
          </div>
          <div>
            <img src={ratings} className={styles.ratings} alt="ratings" />
            <img src={food} className={styles.food} alt="food image"></img>
          </div>
        </div>
        <button className={styles.openButton}>
          <img src={clock} className={styles.clock} alt="clock Image"></img>Open
          until 3:00 AM
        </button>
      </section>
      <div className={styles.searchcontainer}>
        <h4 className={styles.section}>
          All Offers from McDonald&apos;s East London
        </h4>
        <input
          type="text"
          className={styles.input}
          placeholder="Search from menu..."
          onChange={handleSearchChange}
        ></input>
      </div>
      <nav className={styles.banner}>
        <ul className={styles.varities}>
          <li className={styles.firstvarietyitem}>
            <a href="#">Offers</a>
          </li>
          <li className={styles.varietyitems}>
            <a href="#">Burgers</a>
          </li>
          <li className={styles.varietyitems}>
            <a href="#">Fries</a>
          </li>
          <li className={styles.varietyitems}>
            <a href="#">Snacks</a>
          </li>
          <li className={styles.varietyitems}>
            <a href="#">Salads</a>
          </li>
          <li className={styles.varietyitems}>
            <a href="#">Cold Drinks</a>
          </li>
          <li className={styles.varietyitems}>
            <a href="#">Happy Meal*</a>
          </li>
          <li className={styles.varietyitems}>
            <a href="#">Desserts</a>
          </li>
          <li className={styles.varietyitems}>
            <a href="#">Hot Drinks</a>
          </li>
          <li className={styles.varietyitems}>
            <a href="#">Sauces</a>
          </li>
          <li className={styles.varietyitems}>
            <a href="#">Orbit*</a>
          </li>
        </ul>
      </nav>
      <section className={styles.offersection}>
        <img src={first} className={styles.firstImage} alt="first offering" />
        <img src={second} className={styles.firstImage} alt="second offering" />
        <img src={third} className={styles.firstImage} alt="third offering" />
      </section>
      <section>
        <div className={styles.menusection}>
          <h2>Burgers</h2>
          <div className={styles.menuItems}>
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <div key={index} className={styles.menuItem}>
                  <div className={styles.itemDetails}>
                    <h3 className={styles.name}>{item.name}</h3>
                    <p className={styles.description}>{item.description}</p>
                    <p className={styles.itemPrice}>{item.price}</p>
                  </div>
                  <div className={styles.imageC}>
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className={styles.itemImage}
                    />
                    <img
                      src={add}
                      alt="click image"
                      className={styles.plus}
                      onClick={() => addItemToCart(item)}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p>Loading menu...</p>
            )}
          </div>
        </div>
      </section>
      <section>
        <div className={styles.secondmenusection}>
          <h2>Fries</h2>
          <div className={styles.secondmenu}>
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <div key={index} className={styles.menuItem}>
                  <div className={styles.itemDetails}>
                    <h3 className={styles.name}>{item.name}</h3>
                    <p className={styles.description}>{item.description}</p>
                    <p className={styles.itemPrice}>{item.price}</p>
                  </div>
                  <div className={styles.imageC}>
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className={styles.itemImage}
                    />
                    <img
                      src={add}
                      alt="click image"
                      className={styles.plus}
                      onClick={() => addItemToCart(item)}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p>Loading menu...</p>
            )}
          </div>
        </div>
      </section>
      <section>
        <div className={styles.thirdmenusection}>
          <h2>Cold Drinks</h2>
          <div className={styles.thirdmenu}>
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <div key={index} className={styles.menuItem}>
                  <div className={styles.itemDetails}>
                    <h3 className={styles.name}>{item.name}</h3>
                    <p className={styles.description}>{item.description}</p>
                    <p className={styles.itemPrice}>{item.price}</p>
                  </div>
                  <div className={styles.imageC}>
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className={styles.itemImage}
                    />
                    <img
                      src={add}
                      alt="click image"
                      className={styles.plus}
                      onClick={() => addItemToCart(item)}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p>Loading menu...</p>
            )}
          </div>
        </div>
      </section>
      <section className={styles.timingssection}>
        <div className={styles.deliveryinfo}>
          <h2>
            <img
              src={tracking}
              className={styles.tracking}
              alt="Tracking icon"
            />
            Delivery Information
          </h2>
          <p className={styles.days}>Monday:</p>
          <span>12:00 AM-3:00 AM, 8:00 AM-3:00 AM</span>
          <br />
          <p className={styles.days}>Tuesday:</p>
          <span>8:00 AM-3:00 AM</span>
          <br />
          <p className={styles.days}>Wednesday:</p>
          <span>8:00 AM-3:00 AM</span>
          <br />
          <p className={styles.days}>Thursday:</p>
          <span>8:00 AM-3:00 AM</span>
          <br />
          <p className={styles.days}>Friday:</p>
          <span>8:00 AM-3:00 AM</span>
          <br />
          <p className={styles.days}>Saturday:</p>
          <span>8:00 AM-3:00 AM</span>
          <br />
          <p className={styles.days}>Sunday:</p>
          <span>8:00 AM-12:00 AM</span>
          <br />
          <p className={styles.days}>Estimated time until delivery:</p>
          <span>20 min</span>
          <br />
        </div>
        <div className={styles.contactinfo}>
          <h2>
            <img src={id} className={styles.id} alt="Contact icon" />
            Contact Information
          </h2>
          <p className={styles.instruction}>
            If you have allergies or other dietary restrictions, please contact
            the restaurant. The restaurant will provide food-specific
            information upon request.
          </p>
          <h4 className={styles.heading}>Phone number</h4>
          <p className={styles.instruction}>+934443-43</p>
          <h4 className={styles.heading}>Website</h4>
          <p className={styles.instruction}>http://mcdonalds.uk/</p>
        </div>
        <div className={styles.operationaltime}>
          <h2>
            <img src={clock1} className={styles.clock1} alt="clock icon" />
            Opeartional Times
          </h2>
          <p>Monday:</p>
          <span> 8:00 AM-3:00 AM</span>
          <br />
          <p>Tuesday:</p>
          <span>8:00 AM-3:00 AM</span>
          <br />
          <p>Wednesday:</p>
          <span>8:00 AM-3:00 AM</span>
          <br />
          <p>Thursday:</p>
          <span>8:00 AM-3:00 AM</span>
          <br />
          <p>Friday:</p>
          <span>8:00 AM-3:00 AM</span>
          <br />
          <p>Saturday:</p>
          <span>8:00 AM-3:00 AM</span>
          <br />
          <p>Sunday:</p>
          <span>8:00 AM-3:00 AM</span>
          <br />
        </div>
      </section>
      <section className={styles.mapSection}>
        <div ref={mapRef} className={styles.map}></div>
      </section>
      <section className={styles.customerreviewssection}>
        <div className={styles.reviews}>
          <h4>Customer Reviews</h4>
          <img src={sidearrow} className={styles.leftarrow} alt="left arrow" />
          <img src={rightarrow} className={styles.leftarrow} alt="left arrow" />
        </div>
        <div className={styles.reviewcards}>
          <img src={review1} className={styles.review1} alt="review1" />
          <img src={review2} className={styles.review1} alt="review1" />
          <img src={review3} className={styles.review1} alt="review1" />
        </div>
      </section>
      <section className={styles.similarrestaurantssection}>
        <img src={ratings} className={styles.rev} alt="ratings"></img>
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
      {renderCartSection()}
    </div>
  );
}

export default RestaurantMenu;

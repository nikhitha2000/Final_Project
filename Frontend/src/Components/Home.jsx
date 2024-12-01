// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../assets/LOGO 1.png";
import styles from "../Components/Home.module.css";
import location from "../assets/Location.png";
import user from "../assets/User.png";
import pizza from "../assets/Untitled.png";
import eat from "../assets/Untitled2.png";
import bg from "../assets/bg.png";
import Group3 from "../assets/Group3.png";
import Group1 from "../assets/Group1.png";
import Group2 from "../assets/Group2.png";
import Group10 from "../assets/Group 10.png";
import Group11 from "../assets/Group 11.png";
import Group12 from "../assets/Group 12.png";
import cuisine1 from "../assets/Rectangle 13.png";
import cuisine2 from "../assets/Rectangle 15.png";
import cuisine3 from "../assets/Rectangle 17.png";
import cuisine4 from "../assets/Rectangle 19.png";
import cuisine5 from "../assets/Rectangle 21.png";
import cuisine6 from "../assets/Rectangle 23.png";
import orderImg from "../assets/Ordering APP.png";
import Advantage from "../assets/Adv.png";
import PerkImg from "../assets/Perk.png";
import logo2 from "../assets/LOGO 2.png";
import appstore from "../assets/appstore.png";
import facebookIcon from "../assets/Facebook.png";
import instagramIcon from "../assets/Instagram.png";
import tiktokIcon from "../assets/TikTok.png";
import SnapchatIcon from "../assets/Snapchat.png";
import order from "../assets/order.png";
import food from "../assets/food.png";
import phone from "../assets/phone.png";
import { useNavigate } from "react-router-dom";
import cart from "../assets/Group 58.png";

function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
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
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
  const handleRestaurantClick = () => {
    navigate("/restaurantMenu");
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
          <img src={cart} className={styles.cart} alt="cart" />
        </div>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Order UK" className={styles.logo} />
          <nav className={styles.navLinks}>
            <ul className={styles.navList}>
              <li>
                <a href="#" className={styles.navFirstItem}>
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
                <a href="/restaurantMenu" className={styles.navItem}>
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

      <section className={styles.mainbanner}>
        <div className={styles.bannertext}>
          <span className={styles.description}>
            Order Restaurant food, takeaway and groceries.
          </span>
          <h1 className={styles.heading}>Feast Your Senses,</h1>
          <h1 className={styles.subheading}> Fast and Fresh</h1>
          <span className={styles.postcode}>
            Enter a postcode to see what we deliver
          </span>
          <div className={styles.searchbar}>
            <input type="text" placeholder="e.g. EC4R 3TE" />
            <button className={styles.searchbtn}>Search</button>
          </div>
        </div>
        <div className={styles.imagecontainer}>
          <img src={pizza} className={styles.pizza}></img>
          <img src={eat} className={styles.eat}></img>
        </div>
        <div className={styles.orderbox}>
          <img src={bg} className={styles.bg}></img>
          <div className={styles.groupWrapper}>
            <img src={Group1} className={styles.group1} alt="Group 1" />
            <div className={styles.textOverlay}>
              <p>We&apos;ve Received your order!</p>
              <p>Awaiting Restaurant acceptance</p>
            </div>
          </div>

          <div className={styles.groupWrapper}>
            <img src={Group2} className={styles.group2} alt="Group 2" />
            <div className={styles.textOverlay}>
              <p>Order Accepted!</p>
              <p>Your order will be delivered shortly</p>
            </div>
          </div>
          <img
            src={Group3}
            className={styles.boxImage}
            alt="Order Notification"
          />
        </div>
      </section>

      <section className="offers">
        <div className={styles.offercontainer}>
          <h2 className={styles.deals}>
            Up to -40% 🎊 Order.uk exclusive deals
          </h2>
          <div className={styles.categorycard}>Vegan</div>
          <div className={styles.categorycard}>Sushi</div>
          <div className={styles.selectedcategorycard}>Pizza & Fast Food</div>
          <div className={styles.categorycard}>Others</div>
        </div>
        <div className="offers-list">
          <img src={Group10} className={styles.offerslist} alt="offers"></img>
          <img src={Group11} className={styles.offerslist} alt="offers"></img>
          <img src={Group12} className={styles.offerslist} alt="offers"></img>
        </div>
      </section>
      <section className={styles.cuisines}>
        <h2>Order.uk Popular Categories 🤩</h2>
        <div className={styles.cuisineslist}>
          <div className={styles.cuisine1}>
            <img
              src={cuisine1}
              alt="cuisines"
              className={styles.cuisineimage}
            />
            <p>Burgers & Fast food</p>
            <span>21 Restaurants</span>
          </div>
          <div className={styles.cuisine2}>
            <img
              src={cuisine2}
              alt="cuisines"
              className={styles.cuisineimage}
            />
            <p>Salads</p>
            <span>32 Restaurants</span>
          </div>
          <div className={styles.cuisine3}>
            <img
              src={cuisine3}
              alt="cuisines"
              className={styles.cuisineimage}
            />
            <p>Pasta & Casuals</p>
            <span>4 Restaurants</span>
          </div>
          <div className={styles.cuisine4}>
            <img
              src={cuisine4}
              alt="cuisines"
              className={styles.cuisineimage}
            />
            <p>Pizza</p>
            <span>32 Restaurants</span>
          </div>
          <div className={styles.cuisine5}>
            <img
              src={cuisine5}
              alt="cuisines"
              className={styles.cuisineimage}
            />
            <p>Breakfast</p>
            <span>4 Restaurants</span>
          </div>
          <div className={styles.cuisine6}>
            <img
              src={cuisine6}
              alt="cuisines"
              className={styles.cuisineimage}
            />
            <p>Soups</p>
            <span>32 Restaurants</span>
          </div>
        </div>
      </section>
      <section className={styles.Restaurants}>
        <h2>Popular Restaurants</h2>
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

      <section className={styles.orderapp}>
        <img src={orderImg} className={styles.orderImg} alt="ordering"></img>
      </section>
      <section className={styles.Perkssection}>
        <img src={Advantage} alt="perks" className={styles.perks}></img>
        <img src={PerkImg} alt="perks" className={styles.perks}></img>
      </section>
      <div className={styles.knowaboutus}>
        <div className={styles.linksContainer}>
          <h3>Know more about us!</h3>
          <a href="#" className={styles.firstlink}>
            Frequent Questions
          </a>
          <a href="#" className={styles.link}>
            Who we are?
          </a>
          <a href="#" className={styles.link}>
            Partner Program
          </a>
          <a href="#" className={styles.link}>
            Help & Support
          </a>
        </div>
        <div className={styles.innersection}>
          <div className={styles.faq}>
            <h4 className={styles.firstheading}>How does Order.UK work?</h4>
            <h4>What payment methods are accepted?</h4>
            <h4>Can I track my order in real-time? </h4>
            <h4>Are there any special discounts or promotions available?</h4>
            <h4>Is Order.UK available in my area?</h4>
          </div>
          <div className={styles.guidelines}>
            <p>Place an Order!</p>
            <img src={order} className={styles.order}></img>
            <span>Place order through our website or Mobile app</span>
          </div>
          <div className={styles.guidelines}>
            <p>Track Progress</p>
            <img src={food} className={styles.order}></img>
            <span>Your can track your order status with delivery time</span>
          </div>
          <div className={styles.guidelines}>
            <p>Get your Order!</p>
            <img src={phone} className={styles.order}></img>
            <span>Your can track your order status with delivery time</span>
          </div>
        </div>
      </div>
      <section className={styles.analytics}>
        <div>
          <h3 className={styles.numbers}>546+</h3>
          <h3 className={styles.info}>Registered Riders</h3>
        </div>
        <div>
          <h3 className={styles.numbers}>789,000+</h3>
          <h3 className={styles.info}>Orders Delivered</h3>
        </div>
        <div>
          <h3 className={styles.numbers}>690+</h3>
          <h3 className={styles.info}>Restaurants Partnered</h3>
        </div>
        <div>
          <h3 className={styles.numbers}>17,457</h3>
          <h3 className={styles.info}>Food Items</h3>
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
              We won’t spam, read our <a href="#privacy-policy">email policy</a>
              .
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

export default Home;

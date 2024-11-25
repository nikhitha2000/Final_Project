// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import styles from "../Components/RestaurantMenu.module.css";
import axios from "axios";
import logo from "../assets/LOGO 1.png";
import user from "../assets/User.png";
import location from "../assets/location.png";
import resbg from "../assets/resbg.png";
import ordercompleted from "../assets/Order Completed.png";
import Motocross from "../assets/Motocross.png";
import food from "../assets/Rectangle 44.png";
import ratings from "../assets/Rectangle 64.png";
import clock from "../assets/Clock.png";
import first from "../assets/Group 23.png";
import second from "../assets/Group 43.png";
import third from "../assets/Group 44.png";
function RestaurantMenu() {
  const [username, setUsername] = useState("");
  const [menuItems, setMenuItems] = useState([]);
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
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
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
                <a href="#" className={styles.navLastItem}>
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
            {menuItems.length > 0 ? (
              menuItems.map((item, index) => (
                <div key={index} className={styles.menuItem}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p className={styles.itemPrice}>{item.price}</p>
                    <img src={item.imageUrl} alt={item.name}
                    className={styles.itemImage}
                  />
                </div>
              ))
            ) : (
              <p>Loading menu...</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default RestaurantMenu;

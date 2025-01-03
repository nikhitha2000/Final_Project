// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import styles from "../Components/Address.module.css";
import logo from "../assets/LOGO 1.png";
import caart from "../assets/Group 58.png";
import user from "../assets/User.png";
import loocation from "../assets/Location.png";
import arrowleft from "../assets/arrow-left.png";
import { useNavigate } from "react-router-dom";
import location1 from "../assets/location1.png";
import add from "../assets/Frame 100.png";
import logo2 from "../assets/LOGO 2.png";
import appstore from "../assets/appstore.png";
import facebookIcon from "../assets/Facebook.png";
import instagramIcon from "../assets/Instagram.png";
import tiktokIcon from "../assets/TikTok.png";
import SnapchatIcon from "../assets/Snapchat.png";
function Address() {
  const [isCartVisible, setCartVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const formRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
  const handleAddAddress = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const newAddress = {
      state: formData.get("state"),
      city: formData.get("city"),
      pinCode: formData.get("pinCode"),
      phoneNumber: formData.get("phoneNumber"),
      fullAddress: formData.get("fullAddress"),
    };

    setAddresses([...addresses, newAddress]);
    setModalOpen(false);
  };
  const renderAddressCards = () => {
    return addresses.map((address, index) => (
      <div className={styles.addressCard} key={index}>
        <div>
          <h3>{address.name}</h3>
        </div>
        <p>{address.fullAddress}</p>
        <p>
          {address.state}, {address.city}, {address.pinCode}
        </p>
        <p>Phone Number:{address.phoneNumber}</p>

        <div className={styles.addressActions}>
          <button>Edit</button>
          <button>Remove</button>
        </div>
      </div>
    ));
  };
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
      <div className={styles.Address}>
        <img
          src={arrowleft}
          className={styles.arrowleft}
          alt="left"
          onClick={() => navigate("/checkout")}
        />
        <h2>Your Addresses</h2>
      </div>
      <div className={styles.addressContainer}>
        <img
          src={add}
          className={styles.add}
          alt="add"
          onClick={() => setModalOpen(true)}
        />
        <p className={styles.addAdd}>Add Address</p>
      </div>
      {renderAddressCards()}
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalContain}>
              <img src={location1} alt="Add Address" className={styles.loc} />
              <h2>Add New Address</h2>
            </div>
            <form ref={formRef} onSubmit={handleAddAddress}>
              <input
                type="text"
                name="state"
                placeholder="State"
                className={styles.state}
              />
              <input
                type="text"
                name="city"
                placeholder="City/District"
                className={styles.city}
              />
              <input
                type="text"
                name="pinCode"
                placeholder="Pin Code"
                className={styles.pincode}
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                className={styles.phonenumber}
              />
              <br />
              <textarea
                name="fullAddress"
                placeholder="Enter Full address"
                className={styles.fulladdress}
              ></textarea>
              <button type="submit" className={styles.save}>
                Save
              </button>
            </form>
          </div>
        </div>
      )}
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
              We won&apos;t spam, read our{" "}
              <a href="#privacy-policy">email policy</a>
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

export default Address;

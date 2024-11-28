// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import styles from "../Components/Payment.module.css";
import logo from "../assets/LOGO 1.png";
import caart from "../assets/Group 58.png";
import user from "../assets/User.png";
import loocation from "../assets/Location.png";
import arrowleft from "../assets/arrow-left.png";
import { useNavigate,useLocation } from "react-router-dom";
import walleticon from "../assets/walleticon.png";
import Rightarrow from "../assets/ArrowRight.png";
import mastercard from "../assets/Mastercard.png";
import paypal from "../assets/Paypal.png";
import stripe from "../assets/Stripe.png";
import add1 from "../assets/add1.png";
import logo2 from "../assets/LOGO 2.png";
import appstore from "../assets/appstore.png";
import facebookIcon from "../assets/Facebook.png";
import instagramIcon from "../assets/Instagram.png";
import tiktokIcon from "../assets/Tiktok.png";
import SnapchatIcon from "../assets/Snapchat.png";
function Payment() {
  const [username, setUsername] = useState("");
  const [isCartVisible, setCartVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { subtotal } = location.state || {};
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
  return (
    <div>
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
                <a href="#" className={styles.navLastItem}>
                  <img src={user} className={styles.user}></img> Hey
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
        <h2>Choose and Pay</h2>
      </div>
      <div className={styles.walletsection}>
        <div className={styles.walletContainer}>
          <img
            src={walleticon}
            className={styles.walleticon}
            alt="walleticon"
          ></img>
          <div className={styles.walletinfo}>
            <p>Wallet</p>
            <span>Available balance: ₹300</span>
          </div>
          <img
            src={Rightarrow}
            className={styles.rightarrow}
            alt="rightarrow"
          ></img>
        </div>
        <div className={styles.amountpaysection}>
          <div className={styles.amount}>
            <p className={styles.pay}>Amount to be payed</p>
            <p className={styles.total}>₹{subtotal}</p>
          </div>
          <hr />
          <button className={styles.proceedbutton}onClick={()=>navigate("/success")}>Proceed Payment</button>
        </div>
      </div>
      <hr />
      <div className={styles.cardtypes}>
        <div className={styles.mastercarddiv}>
          <img src={mastercard} className={styles.mcicon} alt="mcicon"></img>
          <p>Masterkard</p>
          <input
            type="radio"
            name="masterkard"
            className={styles.mastercardradio}
          ></input>
        </div>
        <div className={styles.paypaldiv}>
          <img
            src={paypal}
            className={styles.paypalicon}
            alt="paypalicon"
          ></img>
          <p>paypal</p>
          <input
            type="radio"
            name="masterkard"
            className={styles.paypalradio}
          ></input>
        </div>
        <div className={styles.stripediv}>
          <img
            src={stripe}
            className={styles.stripeicon}
            alt="stripeicon"
          ></img>
          <p>stripe</p>
          <input
            type="radio"
            name="masterkard"
            className={styles.striperadio}
          ></input>
        </div>
        <div className={styles.adddiv}>
          <img src={add1} className={styles.addbutton} alt="add" />
          <p>Add Debit Card</p>
        </div>
      </div>
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

export default Payment;

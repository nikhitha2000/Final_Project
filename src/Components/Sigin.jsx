// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../assets/LOGO 1.png";
import styles from "../Components/Sigin.module.css";
import Art from "../assets/Art.png";
import logo2 from "../assets/LOGO 2.png";
import appstore from "../assets/appstore.png";
import facebookIcon from "../assets/Facebook.png";
import instagramIcon from "../assets/Instagram.png";
import tiktokIcon from "../assets/Tiktok.png";
import SnapchatIcon from "../assets/Snapchat.png";
function Sigin() {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.leftcontainer}>
          <img src={logo} alt="logo" className={styles.logo} />
          <h3 className={styles.title}>Welcome Back 👋</h3>
          <span className={styles.subtitle}>
            Today is a new day. It&apos;s your day. You shape it.{" "}
          </span>
          <span className={styles.instruction}>Sign in to start ordering.</span>
          <form className={styles.form}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <br />
            <input
              type="email"
              placeholder="Example@email.com"
              className={styles.input}
            ></input>
            <br />
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <br />
            <input
              type="password"
              placeholder="At least 8 characters"
              className={styles.input}
            ></input>
          </form>
          <p className={styles.forgotPassword}>
            <a href="#forgot-password">Forgot Password?</a>
          </p>
          <button type="submit" className={styles.button}>
            Sign In
          </button>
          <p className={styles.signUpPrompt}>
            Don&apos;t you have an account? <a href="#signup">Sign up</a>
          </p>
        </div>
        <div className={styles.rightcontainer}>
          <img src={Art} className={styles.ArtImage} alt="food"></img>
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
              <span>Company # 490039-445, Registered with</span><br />
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
    </>
  );
}

export default Sigin;

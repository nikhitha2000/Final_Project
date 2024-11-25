// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import logo from "../assets/LOGO 1.png";
import styles from "../Components/Sigin.module.css";
import Art from "../assets/Art.png";
import logo2 from "../assets/LOGO 2.png";
import appstore from "../assets/appstore.png";
import facebookIcon from "../assets/Facebook.png";
import instagramIcon from "../assets/Instagram.png";
import tiktokIcon from "../assets/Tiktok.png";
import SnapchatIcon from "../assets/Snapchat.png";
import { Link, useNavigate } from "react-router-dom";
function Signin() {
  const [toastMessage, setToastMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.email) errors.email = "*Email is required";
    if (!formData.password) {
      errors.password = "*Password is required";
    } else if (formData.password.length < 8) {
      errors.password =
        "*Password must be at least 8 characters long";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = { 
      email: formData.email, 
      password: formData.password 
    };
  
    try {
      const response = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });
  
      const data = await response.json();
      console.log(data)
  
      if (response.ok) {
        localStorage.setItem("username", data.username);
        localStorage.setItem("token", data.token); // Store the token
        navigate("/home");  
      } else {
        setToastMessage(data.message); // Show error message from backend
      }
    } catch (error) {
      setToastMessage("Something went wrong, please try again.");  
    }
  };

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
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Example@email.com"
              className={styles.input}
              value={formData.email}
              onChange={handleInputChange}
            />
            {formErrors.email && (
              <span className={styles.error}>{formErrors.email}</span>
            )}
            <br />
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="At least 8 characters"
              className={styles.input}
              value={formData.password}
              onChange={handleInputChange}
            />
            {formErrors.password && (
              <span className={styles.error}>{formErrors.password}</span>
            )}
            <br />
            <p className={styles.forgotPassword}>
            <a href="#forgot-password">Forgot Password?</a>
          </p>
            <button type="submit" className={styles.button}>
              Sign In
            </button>
          </form>
         
          <p className={styles.signUpPrompt}>
            Don&apos;t have an account? <Link to="/">Sign up</Link>
          </p>
        </div>
        <div className={styles.rightcontainer}>
          <img src={Art} className={styles.ArtImage} alt="food" />
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
              We won’t spam, read our <a href="#privacy-policy">email policy</a>.
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
      {/* Conditional ToastMessage Display */}
      {toastMessage && (
        <div className={styles.toastMessage}>{toastMessage}</div>
      )}
    </>
  );
}

export default Signin;

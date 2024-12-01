// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import styles from "../Components/Profile.module.css";
import logo from "../assets/LOGO 1.png";
import caart from "../assets/Group 58.png";
import user from "../assets/User.png";
import loocation from "../assets/Location.png";
import arrowleft from "../assets/arrow-left.png";
import { useNavigate } from "react-router-dom";
import iconface from "../assets/Ellipse 11.png";
import walleticon from "../assets/walleticon.png";
import editicon from "../assets/edit-3.png";
import add from "../assets/Frame 100.png";
import logo2 from "../assets/LOGO 2.png";
import appstore from "../assets/appstore.png";
import facebookIcon from "../assets/Facebook.png";
import instagramIcon from "../assets/Instagram.png";
import tiktokIcon from "../assets/TikTok.png";
import SnapchatIcon from "../assets/Snapchat.png";
function Profile() {
  const [username,setUsername] = useState("");
  const [isCartVisible, setCartVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleAddCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const [profileData, setProfileData] = useState({
    fullName: "Mike Ross",
    email: "mikeross@gmail.com",
    gender: "Male",
    country: "India",
  });
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedProfileData = JSON.parse(localStorage.getItem("profileData"));

    if (storedUsername) {
      setUsername(storedUsername);
    }

    if (storedProfileData) {
      setProfileData(storedProfileData);
    }
  }, []);

  const handleSaveClick = () => {
    localStorage.setItem("profileData", JSON.stringify(profileData));
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };
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
                  {username?profileData.fullName : "Guest"}
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
          onClick={() => navigate("/Home")}
        />
        <h2>My Profile</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.iconcontainer}>
          <img src={iconface} className={styles.icon} alt="faceicon" />
          <h4>{profileData.fullName}</h4>
        </div>
        <button
          onClick={isEditing ? handleSaveClick : handleEditClick}
          className={styles.editButton}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
      <div className={styles.profileDetails}>
        <div className={styles.inputGroup}>
          <label className={styles.namelabel}>Full Name</label>
          <label className={styles.namelabel}>Email Address</label>
          <br />
          <input
            type="text"
            name="fullName"
            value={profileData.fullName}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={styles.input}
          />

          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.namelabel}>Gender</label>
          <label className={styles.namelabel}>Country</label>
          <br />
          <input
            type="text"
            name="gender"
            value={profileData.gender}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={styles.input}
          />

          <input
            type="text"
            name="country"
            value={profileData.country}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={styles.input}
          />
        </div>
      </div>
      <hr />
      <div className={styles.payment}>
        <h2>Saved Payment Methods</h2>
        <div className={styles.savedcardcontainer}>
          <div className={styles.savedcardinfo}>
            <img
              src={walleticon}
              className={styles.walleticon}
              alt="wallet icon"
            />
            <div>
              <p>xxxx xxxx xxxx 1234</p>
              <span>Mike Ross</span>
            </div>
            <img src={editicon} className={styles.editicon} alt="edit icon" />
          </div>
          <div className={styles.savedcardinfo}>
            <img
              src={walleticon}
              className={styles.walleticon}
              alt="wallet icon"
            />
            <div>
              <p>xxxx xxxx xxxx 6789</p>
              <span>Mike Ross</span>
            </div>
            <img src={editicon} className={styles.editicon} alt="edit icon" />
          </div>
          <div className={styles.savedcardinfo}>
            <img
              src={walleticon}
              className={styles.walleticon}
              alt="wallet icon"
            />
            <div>
              <p>xxxx xxxx xxxx 3468</p>
              <span>Mike Ross</span>
            </div>
            <img src={editicon} className={styles.editicon} alt="edit icon" />
          </div>
          <div className={styles.addnewcardinfo}>
            <img src={add} className={styles.addicon} alt="add icon"onClick={handleAddCardClick} />
            <p className={styles.addnew}>Add new card</p>
          </div>
        </div>
      </div>
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>Edit Payment Method</h3>
            <form>
              <label>Card Number</label>
              <input type="text" placeholder="XXXX XXXX XXXX 1234" className={styles.paymentinput} /><br />

              <label>Expiration</label>
              <input type="text" placeholder="MM/YY" className={styles.paymentinput} /><br />

              <label>CVC</label>
              <input type="text" placeholder="XXX" className={styles.paymentinput} /><br />

              <label>Name on Card</label>
              <input type="text" placeholder="Mike Ross"className={styles.paymentinput} /><br />
            </form>
            <div className={styles.modalActions}>
              <button className={styles.removeButton}>Remove</button>
              <div className={styles.buttons}>
              <p className={styles.cancelButton} onClick={handleCloseModal}>
                Cancel
              </p>
              <button className={styles.saveButton} onClick={handleCloseModal}>
                Save Changes
              </button>
              </div>
            </div>
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

export default Profile;

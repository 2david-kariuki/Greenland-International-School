// src/components/Footer/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
// Import social media icons (you'll need to add these files to src/assets/images)
import twitterIcon from "../../assets/images/twitter-icon.png";
import facebookIcon from "../../assets/images/facebook-icon.png";
import instagramIcon from "../../assets/images/instagram-icon.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerNav}>
        <Link to="/about">About Us</Link>
        <Link to="/admissions">Admissions</Link>
        <Link to="/academics">Academics</Link>
        <Link to="/activities">Activities</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className={styles.socialLinks}>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
      <p className={styles.copyright}>
        ©2024 Greenwood International School. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

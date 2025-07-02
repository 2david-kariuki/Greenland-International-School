// src/components/Header/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">Greenwood School</Link>{" "}
        {/* Replace with actual logo image later */}
      </div>
      <nav className={styles.nav}>
        <Link to="/about" className={styles.navLink}>
          About Us
        </Link>
        <Link to="/academics" className={styles.navLink}>
          Academics
        </Link>
        <Link to="/admissions" className={styles.navLink}>
          Admissions
        </Link>
        <Link to="/activities" className={styles.navLink}>
          Activities
        </Link>
        <Link to="/contact" className={styles.navLink}>
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;

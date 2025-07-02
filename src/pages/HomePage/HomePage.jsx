// src/pages/HomePage/HomePage.jsx
import React from "react";
import styles from "./HomePage.module.css"; // For page-specific layout

function HomePage() {
  return (
    <div className={styles.homePage}>
      <h1>Welcome to Greenwood International School!</h1>
      <p>This is the homepage content.</p>
      {/* Will add HeroSection, HighlightCards, and UpdateEventCards here */}
    </div>
  );
}

export default HomePage;

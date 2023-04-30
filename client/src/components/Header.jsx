import React from "react";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <img
        class={styles.demobg}
        src="https://observer.com/wp-content/uploads/sites/2/2020/01/technology-4256272_1920.jpg?resize=768,512"
        alt=""
      ></img>
      <div className={styles.headerContent}>
        <h1 className={styles.headerTitle}>
          Revolutionize Your Hiring Process with AI
        </h1>
        <p className={styles.headerSubtitle}>
          Efficiently screen and hire top candidates using our AI-powered
          interview platform.
        </p>
        <a href="#signup" className={`${styles.btn}`}>
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default Header;

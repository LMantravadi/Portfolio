import React, { useState, useEffect } from "react";
import styles from "./BackToTop.module.css";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={styles.backToTop}
      style={{ display: showButton ? "block" : "none" }}
      onClick={handleClick}
    >
      ↑
    </button>
  );
};

export default BackToTop;

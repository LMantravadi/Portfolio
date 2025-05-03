import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils.js";
import { useState } from "react";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div className={styles.navbar}>
        <img
          className={styles.menuBtn}
          src={
            isMenuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          alt="menu button"
        />
        <div className={styles.menu}>
          <ul
            className={`${styles.menuItems} ${
              isMenuOpen ? styles.menuOpen : ""
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

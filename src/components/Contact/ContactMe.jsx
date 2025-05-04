import React from "react";
import styles from "./ContactMe.module.css";

export const ContactMe = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="assets/contact/emailIcon.png" alt="Email Icon" />
          <a href="mailto:lakshmi.p.mantravadi@gmail.com">GMail</a>
        </li>
        <li className={styles.link}>
          <img src="assets/contact/linkedinIcon.png" alt="Email Icon" />
          <a href="https://www.linkedin.com/in/lakshmi-p-mantravadi/">
            LinkedIn
          </a>
        </li>
        <li className={styles.link}>
          <img src="assets/contact/githubIcon.png" alt="Email Icon" />
          <a href="https://github.com/LMantravadi">GitHub</a>
        </li>
      </ul>
    </footer>
  );
};

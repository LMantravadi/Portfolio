import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="assets/about/aboutImage.png"
          alt="About Me"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img alt="front-end icon" src="assets/about/frontend.png" />

            <div className={styles.aboutItemText}>
              <h3>Front-end Developer</h3>
              <p>
                Passionate Front-End Developer crafting clean, interactive, and
                accessible web experiences with React, JavaScript, and modern
                design systems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="assets/about/backend.png" alt="backend icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Back-End Developer focused on creating secure, efficient, and
                scalable systems with Node.js, .NET, and relational & NoSQL
                databases.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="assets/about/fullstack.png" alt="full Stack icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack developer</h3>
              <p>
                Full-Stack Developer crafting interactive front-ends with React
                and building secure, efficient back-ends using Node.js, Express,
                .NET, and databases like MongoDB, MySql and SQL Server.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

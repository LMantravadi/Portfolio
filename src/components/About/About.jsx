import React from "react";
import aboutImage from "../../assets/about/aboutImage.png";
import cursorIconImage from "../../assets/about/cursorIcon.png";
import serverIconImage from "../../assets/about/serverIcon.png";
import uiIconImage from "../../assets/about/uiIcon.png";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="About Me"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/frontend.png")} alt="front-end icon" />
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
            <img src={getImageUrl("about/backend.png")} alt="backend icon" />
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
            <img
              src={getImageUrl("about/fullstack.png")}
              alt="full Stack icon"
            />
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

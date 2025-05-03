import React from "react";
// import { getImageUrl } from "../../utils";
import heroImage from "../../assets/hero/heroImage.png";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>Welcome! I'm Lakshmi</h3>
        <h3 style={{ marginBottom: "20px" }}>
          Discover how I turn ideas into responsive, scalable web solutions.
        </h3>
        <p className={styles.description}>
          I’m a Full Stack Developer with hands-on experience building
          responsive, high-performance web applications using React, Tailwind
          CSS, and Node.js. I specialize in transforming ideas into clean,
          accessible front-end interfaces and developing robust back-end APIs
          with Express. With expertise in managing databases like MySQL and
          MongoDB, I focus on delivering scalable solutions that solve
          real-world problems. I enjoy turning complex challenges into elegant
          products, collaborating with teams, and continuously learning new
          technologies to stay ahead in the ever-evolving tech landscape.
        </p>

        <div className={styles.buttonGroup}>
          <a
            className={styles.contactBtn}
            href="mailto:lakshmi.p.mantravadi@gmail.com"
          >
            Contact Me
          </a>

          <a
            className={styles.downloadBtn}
            href="/Lakshmi Prasanthi Mantravadi Resume.docx"
            download
          >
            Download Resume
          </a>
        </div>
      </div>

      <img src={heroImage} alt="Hero" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

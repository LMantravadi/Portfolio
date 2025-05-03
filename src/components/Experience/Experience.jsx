import React from "react";
import workHistory from "../../data/history.json";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          {workHistory.map((work, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(work.imageSrc)}
                  alt={`${work.client} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${work.role}, ${work.client}`}</h3>
                  <p>{`${work.startDate} - ${work.endDate}`}</p>
                  <ul>
                    {work.experiences.map((experience, id) => {
                      return (
                        <li key={id}>
                          <p>{experience}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

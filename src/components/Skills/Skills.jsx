import React from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import { useState, useEffect } from "react";

export const Skills = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % skills.length);
      }, 3000); // Change slide every 3 seconds
    }
    return () => clearInterval(intervalId);
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div className={styles.container} id="skills">
      <h3 className={styles.title}>My Skill Set</h3>

      {/* Slideshow */}
      <div className={styles.slideshow}>
        {skills.map((category, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              currentSlideIndex === index ? styles.activeSlide : ""
            }`}
          >
            <div className={styles.skills}>
              {category[Object.keys(category)[0]].map((skill, skillIndex) => (
                <div key={skillIndex} className={styles.skill}>
                  <div className={styles.imageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              ))}
            </div>

            <h2 className={styles.category}>{Object.keys(category)[0]}</h2>
          </div>
        ))}
        <button className={styles.playPauseButton} onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <div className={styles.dots}>
          {skills.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                currentSlideIndex === index ? styles.activeDot : ""
              }`}
              onClick={() => setCurrentSlideIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// ===============================================
// export const Skills = () => {
//   const categoryNames = skills.map((cat) => Object.keys(cat)[0]);
//   const [activeTab, setActiveTab] = useState(categoryNames[0]); // Start with first category

//   return (
//     <div className={styles.container} id="skills">
//       <h3 className={styles.title}>My Skill Set</h3>

//       {/* Tabs */}
//       <div className={styles.tabs}>
//         {categoryNames.map((category) => (
//           <button
//             key={category}
//             className={`${styles.tabButton} ${
//               activeTab === category ? styles.activeTab : ""
//             }`}
//             onClick={() => setActiveTab(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Skills Grid */}
//       <div className={styles.skills}>
//         {skills
//           .find((catObj) => Object.keys(catObj)[0] === activeTab)
//           [activeTab].map((skill, idx) => (
//             <div key={idx} className={styles.skill}>
//               <div className={styles.imageContainer}>
//                 <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
//               </div>
//               <p>{skill.title}</p>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// ====================================================
// import React from "react";
// import styles from "./Skills.module.css";
// import skills from "../../data/skills.json";
// import { getImageUrl } from "../../utils";

// export const Skills = () => {
//   return (
//     <div className={styles.container} id="skills">
//       <h3 className={styles.title}>My Skill Set</h3>

//       <div className={styles.content}>
//         <div className={styles.skills}>
//           {skills.map((skill, id) => {
//             console.log(skill);
//             <div key={id} className={styles.skill}>
//               <div className={styles.imageContainer}>
//                 <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
//               </div>
//               <p>{skill.title}</p>
//             </div>;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// ====================================================

// import React from "react";
// import styles from "./Skills.module.css";
// import skills from "../../data/skills.json";
// import { getImageUrl } from "../../utils";

// export const Skills = () => {
//   return (
//     <div className={styles.container} id="skills">
//       <h3 className={styles.title}>My skill set</h3>
//       <div className={styles.content}>
//         <div className={styles.skills}>
//           {skills.map((skill, id) => {
//             return (
//               <div key={id} className={styles.skill}>
//                 <div className={styles.imageContainer}>
//                   <img src={getImageUrl(skill.imageSrc)} alt="" />
//                 </div>
//                 <p>{skill.title}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };
// ====================================================

import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import headAnimation from "../assets/headLottie.json"; // Your Lottie Head animation
import aiProcessingAnimation from "../assets/AIanimation.json"; // Your Lottie AI animation
import styles from "../styles/animation.module.scss";
import report from "../assets/Neev.webp";

const Animation = () => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setAnimationStep(1), 1000), // Head moves in
      setTimeout(() => setAnimationStep(2), 2000), // AI processing moves in
      setTimeout(() => setAnimationStep(3), 8000), // Report starts from AI and moves to the right
    ];
    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, []);

  const headOptions = {
    animationData: headAnimation,
    loop: true,
    autoplay: true,
    renderer: "svg",
  };

  const aiOptions = {
    animationData: aiProcessingAnimation,
    loop: true,
    autoplay: true,
  };

  return (
    <div className={styles.appContainer}>
      <div
        className={`${styles.element} ${styles.head} ${
          animationStep >= 1 ? styles.headVisible : styles.headVisible
        }`}
      >
        <Lottie options={headOptions} className={styles.headAi} />
      </div>

      <div
        className={`${styles.element} ${styles.ai} ${
          animationStep >= 2 ? styles.aiVisible : styles.aiVisible
        }`}
      >
        <Lottie options={aiOptions} className={styles.lottieAi} />
      </div>

      <div
        className={`${styles.element} ${styles.report} ${
          animationStep >= 3 ? styles.reportVisible : ""
        }`}
      >
        <div
          style={{
            background: "#ffffff",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src={report}
            alt="Report"
            className={styles.reportImage}
            // style={{ width: "400px", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Animation;

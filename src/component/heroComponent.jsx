import styles from "../styles/heroComponent.module.scss";
import calendar from "../assets/calendar.webp";

const HeroComponent = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainHeroText}>
        Connecting Patients and <br />
        Providers Through <div className={styles.precision}> Precision </div>
      </div>
      <button className={styles.buttonSticky}>
        <div className={styles.text}>
          Get in Touch
          <img src={calendar} className={styles.buttonImage} />
        </div>
      </button>
    </div>
  );
};

export default HeroComponent;

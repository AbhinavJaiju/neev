import styles from "../styles/navbar.module.scss";
import logo from "../assets/neevLogo.svg";
import X from "../assets/Xlogo.svg";

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.leftContainer}>
        <img src={logo} alt="neevLogo" />
        <span className={styles.neev}>neev</span>
      </div>
      <div className={styles.rightContainer}>
        <a href="https://x.com/NeevHQ" target="_blank" className={styles.xLogo}>
          <img src={X} className={styles.Xlogo} />
        </a>
        <a
          href="https://wellfound.com/company/neevhq"
          target="_blank"
          className={styles.careers}
        >
          <span>Careers</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;

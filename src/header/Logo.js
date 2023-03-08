import { Link } from "react-router-dom";

import styles from "./Logo.module.css";
import siteLogo from "../images/logo.png";

function Logo() {
  return (
    <div className={styles.logo}>
      <Link to="/" className={styles.image}>
        <img src={siteLogo} alt="logo" height={100} width={100} />
      </Link>
      <Link to="/" className={styles.name}>
        My Mess Meal
      </Link>
    </div>
  );
}

export default Logo;

import { Link } from "react-router-dom";

import styles from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <nav>
      <ul className={styles.container}>
        <li className={styles.listItems}>
          <Link to="/about" className={styles.link}>
            About
          </Link>
        </li>
        <li className={styles.listItems}>
          <Link to="/recipes" className={styles.link}>
            Recipes
          </Link>
        </li>
        <li className={styles.listItems}>
          <Link to="/menu" className={styles.link}>
            Menu
          </Link>
        </li>
        <li className={styles.listItems}>
          <Link to="/meal-calendar" className={styles.link}>
            Meal Calendar
          </Link>
        </li>
        <li className={styles.listItems}>
          <Link to="/contact" className={styles.link}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;

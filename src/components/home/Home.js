import CalorieTracker from "../calorie-tracker/CalorieTracker";
import MealEntry from "../meal-entry/MealEntry";
import MealFeedback from "../feedback/MealFeedback";
import UpcomingMeal from "../upcoming-meal/UpcomingMeal";
import styles from "./Home.module.css";
import homepageImage from "../../images/back.JPG";

function Home() {
  return (
    <div className={styles.container}>
      <p className={`${styles.sideContent} ${styles.firstWord}`}>S A V E</p>
      <p className={`${styles.sideContent} ${styles.secondWord}`}>F O O D</p>
      <div className={styles.image}>
        <img src={homepageImage} alt="save food" width={400} height={400} />
      </div>
      <p className={`${styles.sideContent} ${styles.thirdWord}`}>S A V E</p>
      <p className={`${styles.sideContent} ${styles.fourthWord}`}> L I F E</p>
      <div className={styles.firstRow}>
        <UpcomingMeal />
        <MealEntry />
      </div>
      <div className={styles.secondRow}>
        <MealFeedback />
        <CalorieTracker />
      </div>
    </div>
  );
}

export default Home;

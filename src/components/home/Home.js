import CalorieTracker from "../calorie-tracker/CalorieTracker";
import MealEntry from "../meal-entry/MealEntry";
import MealFeedback from "../feedback/MealFeedback";
import UpcomingMeal from "../upcoming-meal/UpcomingMeal";
import Card from "../../user-interface/Card";
import styles from "./Home.module.css";
import homepageImage from "../../images/homepage.png";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={homepageImage} alt="save food" width={500} height={500} />
      </div>
      <div className={styles.firstRow}>
        <Card>
          <UpcomingMeal />
        </Card>
        <Card>
          <MealEntry />
        </Card>
      </div>
      <div className={styles.secondRow}>
        <Card>
          <MealFeedback />
        </Card>
        <Card>
          <CalorieTracker />
        </Card>
      </div>
    </div>
  );
}

export default Home;

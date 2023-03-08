import { useState } from "react";

import styles from "../../user-interface/Card.module.css";
import UpcomingMealModal from "./UpcomingMealModal";

function UpcomingMeal(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function showUpcomingMeal() {
    setIsModalOpen(true);
  }

  function closeUpcomingMeal() {
    setIsModalOpen(false);
  }

  return (
    <div>
      <div className={styles.card} onClick={showUpcomingMeal}>
        <h1 className={styles.card_title}>Upcoming Meal</h1>
      </div>
      {isModalOpen && (
        <UpcomingMealModal show={isModalOpen} handleClose={closeUpcomingMeal} />
      )}
    </div>
  );
}

export default UpcomingMeal;

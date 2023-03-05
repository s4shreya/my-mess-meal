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
      <h1 className={styles.card_title} onClick={showUpcomingMeal}>
        Upcoming Meal
      </h1>
      {isModalOpen && (
        <UpcomingMealModal
          show={isModalOpen}
          handleClose={closeUpcomingMeal}
        />
      )}
    </div>
  );
}

export default UpcomingMeal;

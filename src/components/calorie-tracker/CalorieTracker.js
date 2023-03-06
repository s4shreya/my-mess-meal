import { useState } from "react";

import styles from "../../user-interface/Card.module.css";
import CalorieTrackerModal from "./CalorieTrackerModal";

function CalorieTracker() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showCalorieTrackerModal = () => setIsModalOpen(true);

  const closeCalorieTrackerModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1 className={styles.card_title} onClick={showCalorieTrackerModal}>
        Calorie Tracker
      </h1>
      {isModalOpen && (
        <CalorieTrackerModal
          show={isModalOpen}
          handleClose={closeCalorieTrackerModal}
        />
      )}
    </div>
  );
}

export default CalorieTracker;

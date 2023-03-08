import { useState } from "react";
import Card from "../../user-interface/Card";

import styles from "../../user-interface/Card.module.css";
import CalorieTrackerModal from "./CalorieTrackerModal";

function CalorieTracker() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showCalorieTrackerModal = () => setIsModalOpen(true);

  const closeCalorieTrackerModal = () => setIsModalOpen(false);

  return (
    <div>
      <div onClick={showCalorieTrackerModal}>
        <Card>
          <h1 className={styles.card_title}>Calorie Tracker</h1>
        </Card>
      </div>
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

import { useState } from "react";

import styles from "../../user-interface/Card.module.css";
import MealFeedbackModal from "./MealFeedbackModal";

function MealEntryMealFeedback() {
  const [isModalOpen, setIsModalOpen] = useState(false);

    function showFeedbackModal() {
        console.log("in show");
        setIsModalOpen(true);
    }

//   const showFeedbackModal = () => setIsModalOpen(true);

  const closeFeedbackModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1 className={styles.card_title} onClick={showFeedbackModal}>
        Meal Feedback
      </h1>
      {isModalOpen && (
        <MealFeedbackModal
          show={isModalOpen}
          handleClose={closeFeedbackModal}
        />
      )}
    </div>
  );
}

export default MealEntryMealFeedback;

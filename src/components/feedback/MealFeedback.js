import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "../../../node_modules/react-toastify/dist/ReactToastify.css";
import styles from "../../user-interface/Card.module.css";
import MealFeedbackModal from "./MealFeedbackModal";

function MealEntryMealFeedback() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showFeedbackModal = () => setIsModalOpen(true);

  const closeFeedbackModal = () => setIsModalOpen(false);

  const showFeedbackMessage = () => {
    toast.success(`Feedback form submitted successfully!`, {
      position: toast.POSITION.TOP_CENTER,
      color: "success",
    });
    closeFeedbackModal();
  };

  return (
    <div>
      <h1 className={styles.card_title} onClick={showFeedbackModal}>
        Meal Feedback
      </h1>
      {isModalOpen && (
        <MealFeedbackModal
          show={isModalOpen}
          handleClose={closeFeedbackModal}
          showFeedbackMessage={showFeedbackMessage}
        />
      )}
      <ToastContainer />
    </div>
  );
}

export default MealEntryMealFeedback;

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "../../../node_modules/react-toastify/dist/ReactToastify.css";
import Card from "../../user-interface/Card";
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
      <div onClick={showFeedbackModal}>
        <Card>
          <h1 className={styles.card_title}>Meal Feedback</h1>
        </Card>
      </div>
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

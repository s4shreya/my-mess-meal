import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "../../../node_modules/react-toastify/dist/ReactToastify.css";
import Card from "../../user-interface/Card";
import styles from "../../user-interface/Card.module.css";
import MealEntryForm from "./MealEntryForm";

function MealEntry() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showMealEntryForm = () => setIsModalOpen(true);

  const closeMealEntryForm = () => setIsModalOpen(false);

  const showSubmitMessage = (response) => {
    const data = response ? "have" : "not have";
    toast.success(
      `Response submitted successfully.\nYou will ${data} the upcoming meal!`,
      {
        position: toast.POSITION.TOP_CENTER,
        color: "success",
      }
    );
    closeMealEntryForm();
  };

  return (
    <div>
      <div  onClick={showMealEntryForm}>
        <Card>
      <h1 className={styles.card_title}>
        Meal Entry
      </h1>

        </Card>
      </div>
      {isModalOpen && (
        <MealEntryForm
          isModalOpen={isModalOpen}
          closeHandler={closeMealEntryForm}
          showSubmitMessage={showSubmitMessage}
        />
      )}
      <ToastContainer />
    </div>
  );
}

export default MealEntry;

import { useContext } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MenuContext from "../../store/menu-context";
import styles from "./CalorieTrackerModal.module.css";

function CalorieTrackerModal(props) {
  const menuCtxt = useContext(MenuContext);

  let content;

  if (menuCtxt.meal === 0 && menuCtxt.day === 0) {
    content = (
      <p className={styles.description}>
        You haven't eaten anything from mess today. Have a meal and fill the
        details in the Meal Entry form to track your calories.
      </p>
    );
  } else if (menuCtxt.meal === 0) {
    const remainingCalories = 1500 - menuCtxt.totalCalories;
    content = (
      <section>
        <h3>Total calories consumed for the day: {menuCtxt.totalCalories}</h3>
        <p className={styles.description}>
          Breakfast:{" "}
          {menuCtxt.mealEaten[0]
            ? `${menuCtxt.menuItems[0][menuCtxt.day - 1].calories} kcal`
            : menuCtxt.message[0]}
          <br />
          Lunch:{" "}
          {menuCtxt.mealEaten[1]
            ? `${menuCtxt.menuItems[1][menuCtxt.day - 1].calories} kcal`
            : menuCtxt.message[1]}{" "}
          <br />
          Dinner:{" "}
          {menuCtxt.mealEaten[2]
            ? `${menuCtxt.menuItems[2][menuCtxt.day - 1].calories} kcal`
            : menuCtxt.message[2]}
        </p>
        <p className={styles.summary}>
          {remainingCalories > 0
            ? `You ate ${remainingCalories} kcal less today.`
            : "You have crossed your daily calorie intake limit today."}
        </p>
        <small className={styles.disclaimer}>
          *total calories required per day is 1500 kcal for average adults.
        </small>
      </section>
    );
  } else {
    const remainingCalories = 1500 - menuCtxt.totalCalories;
    content = (
      <section>
        <h3 className={styles.subheading}>
          Calories consumed today till now: {menuCtxt.totalCalories}
        </h3>
        <p className={styles.description}>
          Breakfast:{" "}
          {menuCtxt.mealEaten[0]
            ? `${menuCtxt.menuItems[0][menuCtxt.day].calories} kcal`
            : menuCtxt.message[0]}
        </p>
        {menuCtxt.meal === 2 && (
          <p className={styles.description}>
            Lunch:{" "}
            {menuCtxt.mealEaten[1]
              ? `${menuCtxt.menuItems[1][menuCtxt.day].calories} kcal`
              : menuCtxt.message[1]}
          </p>
        )}
        <p className={styles.summary}>
          {" "}
          Calories left for the day:{" "}
          {remainingCalories > 0
            ? remainingCalories
            : "You have consumed enough calories for the day."}
        </p>
        <small className={styles.disclaimer}>
          *total calories required per day is 1500 kcal for average adults.
        </small>
      </section>
    );
  }

  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      className={styles.modalBody}
    >
      <div className={styles.container}>
        <Modal.Header closeButton className={styles.header}>
          <Modal.Title className={styles.heading}>Calorie Tracker</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.content}>{content}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={props.handleClose}
            className={styles.closeButton}
          >
            Close
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}

export default CalorieTrackerModal;

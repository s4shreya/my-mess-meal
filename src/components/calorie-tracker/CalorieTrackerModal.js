import { useContext } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MenuContext from "../../store/menu-context";

function CalorieTrackerModal(props) {
  const menuCtxt = useContext(MenuContext);

  let content;

  if (menuCtxt.meal === 0 && menuCtxt.day === 0) {
    content = (
      <p>
        You haven't eaten anything from mess today. Have a meal and fill the
        details in the Meal Entry form to track your calories.
      </p>
    );
  } else if (menuCtxt.meal === 0) {
    const remainingCalories = 1500 - menuCtxt.totalCalories;
    content = (
      <section>
        <h3>Total calories consumed for the day: {menuCtxt.totalCalories}</h3>
        <p>
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
        <p>
          {remainingCalories > 0
            ? `You ate ${remainingCalories} kcal less today.`
            : "You have crossed your daily calorie intake limit today."}
        </p>
        <small>
          *total calories required per day is 1500 kcal for average adults.
        </small>
      </section>
    );
  } else {
    const remainingCalories = 1500 - menuCtxt.totalCalories;
    content = (
      <section>
        <h3>Calories consumed today till now: {menuCtxt.totalCalories}</h3>
        <p>
          Breakfast:{" "}
          {menuCtxt.mealEaten[0]
            ? `${menuCtxt.menuItems[0][menuCtxt.day].calories} kcal`
            : menuCtxt.message[0]}
        </p>
        {menuCtxt.meal === 2 && (
          <p>
            Lunch:{" "}
            {menuCtxt.mealEaten[1]
              ? `${menuCtxt.menuItems[1][menuCtxt.day].calories} kcal`
              : menuCtxt.message[1]}
          </p>
        )}
        <p>
          {" "}
          Calories left for the day:{" "}
          {remainingCalories > 0
            ? remainingCalories
            : "You have consumed enough calories for the day."}
        </p>
        <small>
          *total calories required per day is 1500 kcal for average adults.
        </small>
      </section>
    );
  }

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Calorie Tracker</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={props.handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CalorieTrackerModal;

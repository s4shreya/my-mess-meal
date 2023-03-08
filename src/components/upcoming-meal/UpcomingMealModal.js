import { useContext } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import MenuContext from "../../store/menu-context";
import styles from "./UpcomingMealModal.module.css";

function UpcomingMealModal(props) {
  const menuCtxt = useContext(MenuContext);

  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      centered
      className={styles.modalBody}
    >
      <div className={styles.container}>
        <Modal.Header closeButton className={styles.header}>
          <Modal.Title className={styles.heading}>
            Day {menuCtxt.day + 1}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.content}>
          <p>
            Upcoming meal: {menuCtxt.mealName} <br />
            Meal timings: {menuCtxt.timings} <br />
            Menu item: {menuCtxt.menu} <br />
            Calories: {menuCtxt.calories} kcal
          </p>
        </Modal.Body>
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

export default UpcomingMealModal;

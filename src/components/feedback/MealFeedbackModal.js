import { useContext } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MenuContext from "../../store/menu-context";
import Form from "react-bootstrap/Form";
import styles from "./MealFeedbackModal.module.css";

function MealFeedbackModal(props) {
  const menuCtxt = useContext(MenuContext);

  let content;

  if (menuCtxt.meal === 0 && menuCtxt.day === 0) {
    content = <p>No feedback form available. Come after having meal.</p>;
  } else {
    let count = menuCtxt.currentCount;
    count--;
    const mealDetails = menuCtxt.findMeal(count);

    content = (
      <section>
        <h2>Feedback for {mealDetails[0]}</h2>
        <h3>Meal timings: {mealDetails[1]}</h3>
        <h4>Menu Item: {mealDetails[2]}</h4>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className={styles.formLabel}>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="write Anonymous if you don't wan't to disclose your identity"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className={styles.formLabel}>Feedback</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </section>
    );
  }

  const handleSubmit = () => {
    props.showFeedbackMessage();
  };

  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      className={styles.modalBody}
    >
      <div className={styles.container}>
        <Modal.Header closeButton className={styles.header}>
          <Modal.Title className={styles.heading}>Feedback Form</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.content}>{content}</Modal.Body>
        <Modal.Footer>
          {(menuCtxt.meal !== 0 || menuCtxt.day !== 0) && (
            <Button
              variant="primary"
              onClick={handleSubmit}
              className={styles.saveButton}
            >
              Save Changes
            </Button>
          )}
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

export default MealFeedbackModal;

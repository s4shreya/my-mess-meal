import { useContext } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MenuContext from "../../store/menu-context";
import Form from "react-bootstrap/Form";
import StarRating from "react-bootstrap-star-rating";
// import 'path/to/css/star-rating.min.css';
// import 'http://netdna.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css';

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
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="write Anonymous if you don't wan't to disclose your identity"
            />
          </Form.Group>

          <StarRating defaultValue={5} min={0} max={10} step={0.5} />
          <Form.Group className="mb-3">
            <Form.Label>Feedback</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </section>
    );
  }

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Feedback Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        {menuCtxt.meal !== 0 && menuCtxt.day !== 0 && (
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default MealFeedbackModal;

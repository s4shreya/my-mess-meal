import { useContext } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import MenuContext from "../../store/menu-context";

function UpcomingMealModal(props) {
  const menuCtxt = useContext(MenuContext);

  return (
    <Modal show={props.show} onHide={props.handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Upcoming Meal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>Upcoming meal: {menuCtxt.mealName}</h1>
        <h2>Meal timings: {menuCtxt.timings}</h2>
        <h3>Menu item: {menuCtxt.menu}</h3>
        <h4>Calories: {menuCtxt.calories} kcal</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UpcomingMealModal;

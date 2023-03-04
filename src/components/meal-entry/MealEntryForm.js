import { Link } from "react-router-dom";

import styles from "./MealEntryForm.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Enter your Meal details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className={styles.subheading}>Meal: Breakfast</h4>
        <h5 className={styles.subheading}>Timings: 8:00 AM to 9:00 AM</h5>
        <h6 className={styles.subheading}>Menu: "Idli Sambhar"</h6>
        <p className={styles.content}>
          Please mark your availability for this meal here. Food is precious and
          saving it can feed many people on earth.
          <strong> Note:</strong> This entry is only for the upcoming meal. To
          fill further entries, please visit{" "}
          <Link to="/meal-calendar">Meal Calendar</Link>.
        </p>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Row>
              <Col>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First name" autoFocus />
              </Col>
              <Col>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last name" />
              </Col>
            </Row>
          </Form.Group>
          <Row>
            <Col>
              <Form.Select
                defaultValue="Current Year"
                aria-label="Default select example"
              >
                <option>Current Year</option>
                <option value="1">First Year</option>
                <option value="2">Second Year</option>
                <option value="3">Third Year</option>
                <option value="4">Fourth Year</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Select aria-label="Default select example">
                <option>Hostel Number</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
              </Form.Select>
            </Col>
          </Row>
          <div className={styles.toggleStatement}>
          <Form.Label>Will you eat this meal?</Form.Label>
         <div className={styles.toggleButton}>
          <BootstrapSwitchButton
            checked={true}
            width="100"
            onlabel="Yes"
            offlabel="No"
            onstyle="success"
            offstyle="danger"
            
            // fill this on functionality ---------------------------------------------
            // onChange={(checked: boolean) => {
            //     this.setState({ isUserAdmin: checked })
            // }}
          />
          </div>
          </div>
          <Form.Select aria-label="Default select example">
            <option>If NO, specify the reason</option>
            <option value="1">On Leave</option>
            <option value="2">Outing</option>
            <option value="3">Sick</option>
            <option value="4">I do not want to disclose.</option>
          </Form.Select>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className={styles.button} onClick={props.onHide}>Reset</Button>
        <Button className={styles.button} onClick={props.onHide}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MealEntryForm(props) {
  return (
    <div className={styles.container}>
      <MyVerticallyCenteredModal
        show={props.isModalOpen}
        onHide={props.closeHandler}
      />
    </div>
  );
}

export default MealEntryForm;

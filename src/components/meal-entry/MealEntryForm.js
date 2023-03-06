import { Link } from "react-router-dom";
import { useContext, useRef, useState } from "react";

import styles from "./MealEntryForm.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import MenuContext from "../../store/menu-context";

function MealEntryFormModal(props) {
  const menuCtxt = useContext(MenuContext);
  const [ userResponse, setUserResponse ] = useState(true);

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const yearInputRef = useRef();
  const hostelNumberInputRef = useRef();
  const reasonInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const firstNameEntered = firstNameInputRef.current.value;
    const lastNameEntered = lastNameInputRef.current.value;
    const yearEntered = yearInputRef.current.value;
    const hostelNumberEntered = hostelNumberInputRef.current.value;
    const reasonEntered = reasonInputRef.current.value;

    const studentResponse = {
      firstName: firstNameEntered,
      lastName: lastNameEntered,
      year: yearEntered,
      hostelNumber: hostelNumberEntered,
      response: userResponse,
      reason: reasonEntered,
    };

    menuCtxt.incrementCount();
    let cal, msg;
    if(studentResponse.response === true) {
      cal = menuCtxt.menuItems[menuCtxt.meal][menuCtxt.day].calories;
      msg = "";
    }
    else {
      cal = 0;
      msg = "You haven't eaten this meal as entered by you."
    }

    menuCtxt.addCalories(cal);
    menuCtxt.setMessage(msg);
    menuCtxt.checkMealStatus(cal);
    console.log(`in meal form meal eaten is ${menuCtxt.mealEaten}`);
    if(menuCtxt.meal === 0 && menuCtxt.day !== 0) {
      menuCtxt.updateTotalCalories(cal);
    }
    props.onHide();

    console.log(studentResponse);
    console.log(userResponse);

  };

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
      <Form onSubmit={submitHandler}>
        <Modal.Body>
          <h4 className={styles.subheading}>Meal: {menuCtxt.mealName}</h4>
          <h5 className={styles.subheading}>Timings: {menuCtxt.timings}</h5>
          <h6 className={styles.subheading}>Menu: {menuCtxt.menu}</h6>
          <p className={styles.content}>
            Please mark your availability for this meal here. Food is precious
            and saving it can feed many people on earth.
            <strong> Note:</strong> This entry is only for the upcoming meal. To
            fill further entries, please visit{" "}
            <Link to="/meal-calendar">Meal Calendar</Link>.
          </p>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Row>
              <Col>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First name"
                  ref={firstNameInputRef}
                  autoFocus
                  required
                />
              </Col>
              <Col>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last name"
                  ref={lastNameInputRef}
                />
              </Col>
            </Row>
          </Form.Group>
          <Row>
            <Col>
              <Form.Select
                defaultValue="Current Year"
                aria-label="Default select example"
                ref={yearInputRef}
              >
                <option>Current Year</option>
                <option value="1">First Year</option>
                <option value="2">Second Year</option>
                <option value="3">Third Year</option>
                <option value="4">Fourth Year</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Select
                aria-label="Default select example"
                ref={hostelNumberInputRef}
              >
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
                onChange={(checked) => {
                    setUserResponse(checked);
                }}
              />
            </div>
          </div>
          <Form.Select aria-label="Default select example" ref={reasonInputRef}>
            <option>If NO, specify the reason</option>
            <option value="1">On Leave</option>
            <option value="2">Outing</option>
            <option value="3">Sick</option>
            <option value="4">I do not want to disclose.</option>
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button className={styles.button} type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

function MealEntryForm(props) {
  return (
    <div className={styles.container}>
      <MealEntryFormModal
        show={props.isModalOpen}
        onHide={props.closeHandler}
      />
    </div>
  );
}

export default MealEntryForm;

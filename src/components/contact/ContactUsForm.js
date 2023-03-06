import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

import "../../../node_modules/react-toastify/dist/ReactToastify.css";
import styles from "./ContactUsForm.module.css";

function ContactUsForm() {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    const userResponse = {
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage,
    };

    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    messageInputRef.current.value = "";

    toast.success(`Form Submitted Successfully by ${userResponse.name}!`, {
      position: toast.POSITION.TOP_CENTER,
      color: "success",
    });
  };
  return (
    <div>
      <div className="container mt-5">
        <h2 className="mb-3">My Mess Meal Contact Form</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              className="form-control"
              type="text"
              id="name"
              required
              ref={nameInputRef}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-control"
              type="email"
              id="email"
              required
              ref={emailInputRef}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              required
              ref={messageInputRef}
            />
          </div>
          <button className="btn btn-danger" type="submit">
            Send
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}

export default ContactUsForm;

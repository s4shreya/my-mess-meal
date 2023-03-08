import { useRef, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";

import styles from "./MealCalendarForm.module.css";
import "../../../node_modules/react-toastify/dist/ReactToastify.css";
import MenuContext from "../../store/menu-context";

function MealCalendarForm() {
  const menuCtxt = useContext(MenuContext);
  const startDateInputRef = useRef();
  const endDateInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const startDateEntered = startDateInputRef.current.value;
    const endDateEntered = endDateInputRef.current.value;
    const startDate = new Date(startDateEntered);
    const endDate = new Date(endDateEntered);
    const totalDays = endDate.getDate() - startDate.getDate() + 1;

    if (totalDays < 6) menuCtxt.changeCounter(totalDays * 3);

    toast.success(
      `You have marked absent from ${startDateEntered} to ${endDateEntered}!`,
      {
        position: toast.POSITION.TOP_CENTER,
        color: "success",
      }
    );

    startDateInputRef.current.value = "";
    endDateInputRef.current.value = "";
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Mark your unavailability!</h1>
      <form className={styles.dateForm} onSubmit={handleSubmit}>
        <label htmlFor="startDate">Select start date:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          ref={startDateInputRef}
          required
        />
        <label htmlFor="endDate">Select end date:</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          ref={endDateInputRef}
          required
        />
        <button type="submit">Submit</button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default MealCalendarForm;

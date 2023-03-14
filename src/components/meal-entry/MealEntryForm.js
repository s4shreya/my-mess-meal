import MealEntryFormModal from "./MealEntryFormModal";
import styles from './MealEntryForm.module.css';



function MealEntryForm(props) {
  return (
    <div className={styles.container}>
      <MealEntryFormModal
        show={props.isModalOpen}
        onHide={props.closeHandler}
        showSubmitMessage={props.showSubmitMessage}
      />
    </div>
  );
}

export default MealEntryForm;

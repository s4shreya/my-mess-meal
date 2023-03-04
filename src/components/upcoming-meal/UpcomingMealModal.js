import styles from './UpcomingMealModal.module.css';

function UpcomingMealModal(props) {
    console.log(props);
    return (
        <div className={styles.container} onClick={props.closeHandler}>
            <h1 >
                Upcoming meal : {props.meal}
            </h1>
        </div>
    );
}

export default UpcomingMealModal;
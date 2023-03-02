import styles from './UpcomingMealModal.module.css';
import Menu from '../../pages/Menu';

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
import { useState } from 'react';

import styles from '../../user-interface/Card.module.css';
import MealEntryForm from './MealEntryForm';

function MealEntry() {
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const showMealEntryForm = () => setIsModalOpen(true);

    const closeMealEntryForm = () => setIsModalOpen(false);

    return (
        <div>
            <h1 className={styles.card_title} onClick={showMealEntryForm}>Meal Entry</h1>
            { isModalOpen && <MealEntryForm isModalOpen={isModalOpen} closeHandler={closeMealEntryForm} />}
        </div>
    );
}

export default MealEntry;
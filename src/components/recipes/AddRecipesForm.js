import { useRef } from "react";

import styles from "./AddRecipesForm.module.css";

function AddRecipesForm(props) {
  const nameInputRef = useRef();
  const cuisineInputRef = useRef();
  const timeInputRef = useRef();
  const imageInputRef = useRef();
  const caloriesInputRef = useRef();
  const instructionsInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const nameEntered = nameInputRef.current.value;
    const cuisineEntered = cuisineInputRef.current.value;
    const timeEntered = timeInputRef.current.value;
    const imageEntered = imageInputRef.current.value;
    const caloriesEntered = caloriesInputRef.current.value;
    const instructionsEntered = instructionsInputRef.current.value;

    const recipeData = {
      name: nameEntered,
      cuisine: cuisineEntered,
      time: timeEntered,
      image: imageEntered,
      calories: caloriesEntered,
      instructions: instructionsEntered,
    };

    props.onAddRecipe(recipeData);
  };

  return (
    <form
      className={`${styles.form} ${styles.container}`}
      onSubmit={submitHandler}
    >
      <h1 className={styles.heading}>Add New Recipe</h1>
      <div className={styles.field}>
        <label htmlFor="name">Recipe Name</label>
        <input type="text" id="name" required ref={nameInputRef} />
      </div>
      <div className={styles.flexContainer}>
        <div className={`${styles.field} ${styles.flexElements}`}>
          <label htmlFor="cuisine">Cuisine</label>
          <input type="text" id="cuisine" ref={cuisineInputRef} />
        </div>
        <div className={`${styles.field} ${styles.flexElements}`}>
          <label htmlFor="time">Total Time</label>
          <input type="text" id="time" ref={timeInputRef} />
        </div>
        <div className={`${styles.field} ${styles.flexElements}`}>
          <label htmlFor="image">Image URL</label>
          <input type="text" id="image" ref={imageInputRef} />
        </div>
        <div className={`${styles.field} ${styles.flexElements}`}>
          <label htmlFor="calories">Calories</label>
          <input type="number" id="calories" ref={caloriesInputRef} />
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          rows="3"
          ref={instructionsInputRef}
        ></textarea>
      </div>
      <div className={styles.btn}>
        <button>Add Recipe</button>
      </div>
    </form>
  );
}

export default AddRecipesForm;

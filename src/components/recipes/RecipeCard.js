import styles from "./RecipeCard.module.css";
import mango from "../../images/back.JPG";

function RecipeCard(props) {
  console.log(props.recipe);
  return (
    <div className={styles.container}>
      <div id={styles.title}>
        <h3>{props.recipe.name}</h3>
      </div>
      <div className={styles.row}>
        <div className={`${styles.col} ${styles.col1}`}>
          Cuisine: {props.recipe.cuisine} <br />
          Prep time: {props.recipe.prepTime}
        </div>
        <div className={`${styles.col} ${styles.col2}`}>
          <img src={mango} alt="mango" height={100} />
        </div>

        <div className={`${styles.col} ${styles.col3}`}>
          Serves: {props.recipe.serves}
          <br />
          Cook time: {props.recipe.cookTime}
        </div>
      </div>
      <div className={styles.row}>
        Nutrintional Info:
        <br />
        Calories: {props.recipe.nutrition.calories}
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          Protein: {props.recipe.nutrition.protein}
        </div>
        <div className={styles.col}>
          Carbohydrates: {props.recipe.nutrition.carbohydrates}
        </div>
        <div className={styles.col}>Fat: {props.recipe.nutrition.fat}</div>
      </div>
      <div className={styles.row}></div>
      Ingredeints: 
    </div>
  );
}

export default RecipeCard;

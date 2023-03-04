import styles from "./RecipeCard.module.css";
import mango from "../../images/back.JPG";

function RecipeCard(props) {
  return (
    <div className={styles.container}>
      <div id={styles.title}>
        <h3>{props.name}</h3>
      </div>
      <div className={styles.row}>
        <div className={styles.col1}>
          Cuisine: {props.cuisine} <br />
          Total Time: {props.time} <br />
          Calories: {props.calories}
        </div>
        <div className={styles.col2}>
          <img src={props.image} alt="food" height={150} />
        </div>
      </div>

      <div className={styles.rowImage}>Instructions: {props.instructions}</div>
    </div>
  );
}

export default RecipeCard;

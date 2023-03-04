import RecipeCard from "./RecipeCard";
import styles from './RecipeList.module.css';

function RecipeList(props) {
  return (
    <ul className={styles.container}>
      {props.recipeList.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          id={recipe.id}
          name={recipe.name}
          cuisine={recipe.cuisine}
          time={recipe.time}
          image={recipe.image}
          calories={recipe.calories}
          instructions={recipe.instructions}
        />
      ))}
    </ul>
  );
}

export default RecipeList;

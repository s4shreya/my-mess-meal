import { useEffect, useState } from 'react';

import RecipeNavigation from "./RecipesNavigation";
import RecipeCard from "./RecipeCard";
import styles from "./RecipeItems.module.css";

const recipeList = [];

function RecipeItems() {
  const [ isLoading, setIsLoading ] = useState(true);

  if(isLoading) {
    return <section className={styles.loading}>
      <p>
        Loading.....
      </p>
    </section>
  }

  return (
    <div className={styles.container}>
      <RecipeNavigation />
      <div className={styles.cardContainer}>
        {recipeList.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default RecipeItems;

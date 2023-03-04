import { useState, useEffect } from "react";

import RecipeNavigation from "./RecipesNavigation";
import styles from "./RecipeItems.module.css";
import RecipeList from "./RecipeList";

function RecipeItems() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedRecipes, setLoadedRecipes] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://my-mess-meal-56ef5-default-rtdb.firebaseio.com/recipes.json")
      .then((response) => response.json())
      .then((data) => {
        const recipes = [];
        for (const key in data) {
          const recipe = {
            id: key,
            ...data[key],
          };
          recipes.push(recipe);
        }
        setIsLoading(false);
        setLoadedRecipes(recipes);
      });
  }, []);

  if (isLoading) {
    return (
      <section className={styles.loading}>
        <p>Loading.....</p>
      </section>
    );
  }
  return (
    <div className={styles.container}>
      <RecipeNavigation />
      <div className={styles.cardContainer}>
        <RecipeList recipeList={loadedRecipes} />
      </div>
    </div>
  );
}

export default RecipeItems;

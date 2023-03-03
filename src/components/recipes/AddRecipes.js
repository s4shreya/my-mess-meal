import { useNavigate } from 'react-router-dom';

import AddRecipesForm from "./AddRecipesForm";
import RecipeNavigation from "./RecipesNavigation";

function AddRecipes() {
const navigate = useNavigate();

    // function to store the data received from user in database
  const addRecipeHandler = (recipeData) => {
    fetch(
      "https://my-mess-meal-56ef5-default-rtdb.firebaseio.com/recipes.json",
      {
        method: "POST",
        body: JSON.stringify(recipeData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
        navigate('/recipes')
    });
  };

  return (
    <div>
      <RecipeNavigation />
      <AddRecipesForm onAddRecipe={addRecipeHandler} />
    </div>
  );
}

export default AddRecipes;
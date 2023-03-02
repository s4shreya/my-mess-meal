import RecipeNavigation from "./RecipesNavigation";
import RecipeCard from "./RecipeCard";
import styles from "./RecipeItems.module.css";

const mealDetails = [
  {
    id: "b",
    meal: "Breakfast",
    timings: [8, 9, "AM"],
  },
  {
    id: "l",
    meal: "Lunch",
    timings: [1, 2, "PM"],
  },
  {
    id: "d",
    meal: "Dinner",
    timings: [7, 9, "PM"],
  },
];

const recipeList = [
  {
    id: "b1",
    name: "Idli Sambhar",
    prepTime: "9 hrs",
    cookTime: "25 minutes",
    cuisine: "South Indian",
    serves: 5,
    ingredients: [
      ["1 cup", "idli rice"],
      ["1/2 cup", "split urad dal"],
      ["2 cups", "water"],
    ],
    instructions: [
      "Rinse the regular rice.",
      "Rinse the poha and add it to the rice.",
      "Add water. Mix well and soak for 4 to 5 hours.",
    ],
    nutrition: {
      calories: 38,
      carbohydrates: "9g",
      protein: "1g",
      fat: "1g",
    },
  },

  {
    id: "l1",
    name: "Paneer Butter Masala",
    prepTime: "10 minutes",
    cookTime: "30 minutes",
    cuisine: "North Indian",
    serves: 4,
    ingredients: [
      ["20", "cashews"],
      ["2 cup", "tomatoes"],
      ["200 grams", "paneer"],
    ],
    instructions: [
      "Soak cashews and meanwhile chop other vegetables.",
      "Add ginger garlic paste and saute them well.",
      "Add butter and garnish with frest corriander leaves.",
    ],
    nutrition: {
      calories: 307,
      carbohydrates: "9g",
      protein: "9g",
      fat: "27g",
    },
  },

  {
    id: "d1",
    name: "Dal Fry",
    prepTime: "15 minutes",
    cookTime: "10 minutes",
    cuisine: "Indian",
    serves: 2,
    ingredients: [
      ["1 teaspoon", "cumin seeds"],
      ["1/2 cup", "lentils"],
      ["1 pinch", "turmeric"],
    ],
    instructions: [
      "Take arahar dal and rinse it with water.",
      "Mash with a spoon.",
      "Add green chillies and curry leaves and mix them well.",
    ],
    nutrition: {
      calories: 120,
      carbohydrates: "12g",
      protein: "2g",
      fat: "8g",
    },
  },
];

function RecipeItems() {
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

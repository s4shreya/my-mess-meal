import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import styles from "./RecipesNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

function RecipeNavigation() {
  const [TabValue, setTabValue] = useState(false);
  const favoritesCtxt = useContext(FavoritesContext);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <div className={styles.navbar}>
      <Tabs
        value={TabValue}
        onChange={handleChange}
        aria-label="recipe navigation"
        selectionFollowsFocus
        centered
      >
        <Tab
          id={styles.tabButton}
          icon={<MenuBookTwoToneIcon />}
          label="RECIPES LIST"
          value="/recipes/recipe-items"
          to="/recipes/recipe-items"
          component={Link}
        />
        <Tab
          id={styles.tabButton}
          icon={<FavoriteTwoToneIcon />}
          label="FAVORITES"
          value="/recipes/favorite"
          to="/recipes/favorite"
          component={Link}
        />
        <span className={styles.countButton}>
          {favoritesCtxt.totalFavorites}
        </span>
        <Tab
          id={styles.tabButton}
          icon={<AddCircleTwoToneIcon />}
          label="ADD NEW RECIPE"
          value="/recipes/add-recipes"
          to="/recipes/add-recipes"
          component={Link}
        />
      </Tabs>
    </div>
  );
}

export default RecipeNavigation;

import { useContext } from 'react';

import styles from "./RecipeCard.module.css";
import FavoritesContext from '../../store/favorites-context';

function RecipeCard(props) {
  const favoritesCtxt = useContext(FavoritesContext);

  const isItemFavorite = favoritesCtxt.itemIsFavorite(props.id);

  const favoriteStatusHandler = () => {
    if(isItemFavorite) {
      favoritesCtxt.removeFavorite(props.id);
    }
    else {
      favoritesCtxt.addFavorite({
        id: props.id,
        name: props.name,
        cuisine: props.cuisine,
        time: props.time,
        image: props.image,
        calories: props.calories,
        instructions: props.instructions
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.dataContainer}>
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
      <div className={styles.rowBox}>Instructions: {props.instructions}</div>
      </div>
      <div className={styles.btn}>
        <button className={styles.favoriteButton} onClick={favoriteStatusHandler}>
          {isItemFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;

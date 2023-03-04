import { useContext } from 'react';
import { Link } from 'react-router-dom';

import RecipeNavigation from "./RecipesNavigation";
import FavoritesContext from '../../store/favorites-context';
import RecipeList from './RecipeList';

function Favorite() {
    const favoritesCtxt = useContext(FavoritesContext);
    let displayContent;

    if(favoritesCtxt.totalFavorites === 0) {
        displayContent = <p>You have no favorites. <Link to='/recipes/recipe-items'>Add some.</Link></p>
    }
    else {
        displayContent = <RecipeList recipeList={favoritesCtxt.favorites} />
    }

    return (
        <div>
            <RecipeNavigation />
        <h1>My Favorites</h1>
        {displayContent}
        </div>
    );
}

export default Favorite;
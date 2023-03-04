import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: favoriteRecipe => {},
    removeFavorite: recipeId => {},
    itemIsFavorite: recipeId => {}
});

export function FavoritesContextProvider(props) {
    const [ userFavorites, setUserFavorites ] = useState([]);

    const addFavoriteHandler = favoriteRecipe => {
        return (setUserFavorites( prevUserFavorite => {
            return prevUserFavorite.concat(favoriteRecipe);
        }));
    };

    const removeFavoriteHandler = recipeId => {
        return (setUserFavorites( prevUserFavorite => {
            return prevUserFavorite.filter(recipe => recipe.Id !== recipeId);
            console.log("in remove favorite");
        }));
    };

    const itemIsFavorite = recipeId => {
        return userFavorites.some(recipe => recipe.id === recipeId);
    };

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavorite
    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContext;
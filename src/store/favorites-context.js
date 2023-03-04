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
            console.log(`in add handler ${prevUserFavorite}`);
            return prevUserFavorite.concat(favoriteRecipe);
        }));
    };

    function removeFavoriteHandler(recipeId) {
        setUserFavorites(userFavorites.filter(recipe => recipe.id !== recipeId));
        // setUserFavorites( prevUserFavorite => {
        //     console.log("in remove favorite" + prevUserFavorite.filter(recipe => recipe.Id !== recipeId));
        //     return prevUserFavorite.filter(recipe => recipe.Id !== recipeId);
        // })
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
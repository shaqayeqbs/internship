import { useState, createContext } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteEvent) => {},
  removeFavorite: (eventID) => {},
  itemIsFavorite: (eventID) => {},
});
export function FavoritesContextProvider(props) {
  const [userFavorites, setUserfavorites] = useState([]);

  function addFavoriteHandler(favoriteEvent) {
    setUserfavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteEvent);
    });
  }

  function removeFavoriteHandler(eventID) {
    setUserfavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((event) => event.id !== eventID);
    });
  }

  function itemIsFavoriteHandler(eventID) {
    return userFavorites.some((event) => event.id === eventID);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;

import { createContext, useState } from "react";

export const FavouritesContext = createContext({
    ids: [],
    addFavourite: (id) => {},
    removeFavourite: (id) => {}
});

function FavouritesContextProvider({ children }) {
    const [favMealIds, setFavMealIds] = useState([]);

    function addFavourite(id) {
        setFavMealIds(currentFavIds => [...favMealIds, id])
    }
    function removeFavourite(i) {
        setFavMealIds(currentFavIds => currentFavIds.filter(id => id !== i))
    }

    const value = {
        ids: favMealIds,
        addFavourite: addFavourite,
        removeFavourite: removeFavourite
    };

    return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>
}
export default FavouritesContextProvider;
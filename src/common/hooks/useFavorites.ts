import { notification } from "antd";
import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage<Array<number>>(
    "favorites",
    new Array<number>()
  );

  function addFavorite(id: number) {
    const newFavorites = [...favorites, id];
    setFavorites(newFavorites);

    if (newFavorites.length === 5) {
      notification.success({
        message: "Gratulujemy!",
        description: "Dodałeś dzisiaj już 5 albumów do ulubionych",
      });
    }
  }

  function deleteFavorite(id: number) {
    const newFavorites = favorites.filter((fav) => fav !== id);
    setFavorites(newFavorites);
  }

  function isFavorite(id: number) {
    return favorites.find ? favorites.find((fav) => fav === id) : false;
  }

  return {
    favorites,
    addFavorite,
    deleteFavorite,
    isFavorite,
  };
}

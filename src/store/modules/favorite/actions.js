export function addFavorite(product) {
  return {
    type: '@favorite/ADD_FAVORITE',
    product,
  };
}

export function removeFavorite(id) {
  return {
    type: '@favorite/REMOVE_FAVORITE',
    id,
  };
}

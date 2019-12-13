export function toggleFavorite(product) {
  return {
    type: '@favorite/TOGGLE_FAVORITE',
    product,
  };
}

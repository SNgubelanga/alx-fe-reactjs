import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  setRecipes: (newRecipes) => set({
    recipes: newRecipes,
    filteredRecipes: newRecipes, // Ensure filtered recipes update accordingly
  }),

  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.filteredRecipes, newRecipe],
  })),

  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
    filteredRecipes: state.filteredRecipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),

  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id),
    filteredRecipes: state.filteredRecipes.filter(recipe => recipe.id !== id),
    favorites: state.favorites.filter(favId => favId !== id),
    recommendations: state.recommendations.filter(rec => rec.id !== id),
  })),

  setSearchTerm: (term) => set(state => ({
    searchTerm: term,
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    ),
  })),

  addFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.includes(recipeId) ? state.favorites : [...state.favorites, recipeId],
  })),

  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId),
  })),

  generateRecommendations: () => set(state => {
    // Mock recommendation system: Recommend recipes based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;
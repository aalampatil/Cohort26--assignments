// utils/helper.js (optional)
export const getIngredients = (meal) => {
  let ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ing && ing.trim()) {
      ingredients.push(`${measure || ""} ${ing}`);
    }
  }

  return ingredients;
};
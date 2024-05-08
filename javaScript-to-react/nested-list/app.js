const recipes = [
  {
    isVegetarian: true,
    name: "Greek Salad",
    ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
  },
  {
    isVegetarian: false,
    name: "Hawaiian Pizza",
    ingredients: [
      "pizza crust",
      "pizza sauce",
      "mozzarella",
      "ham",
      "pineapple",
    ],
  },
  {
    isVegetarian: true,
    name: "Hummus",
    ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
  },
];

function Recipes() {
  const vegetarianRecipes = recipes.filter((recipe) => recipe.isVegetarian);

  const recipeList = vegetarianRecipes.map((recipe) => {
    const ingredientsList = recipe.ingredients
      .map((ingredient) => `<li>${ingredient}</li>`)
      .join("");
    return `
		<div>
		  <h2>${recipe.name}</h2>
		  <ul>${ingredientsList}</ul>
		</div>
	  `;
  });

  return `
	  <div>
		<h1>Vegetarian Recipes</h1>
		${recipeList.join("")}
	  </div>
	`;
}

const appDiv = document.getElementById("app");
appDiv.innerHTML = Recipes();

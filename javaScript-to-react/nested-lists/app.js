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
  // Filter vegetarian recipes
  const vegetarianRecipes = recipes.filter((recipe) => recipe.isVegetarian);

  // Create HTML for each vegetarian recipe
  const recipesHTML = vegetarianRecipes
    .map(
      (recipe) => `
	  <div>
		<h2>${recipe.name}</h2>
		<ul>
		  ${recipe.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
		</ul>
	  </div>
	`
    )
    .join("");

  // Return the HTML for vegetarian recipes
  return `
	  <div>
		<h1>Vegetarian Recipes</h1>
		${recipesHTML}
	  </div>
	`;
}

const appDiv = document.getElementById("app");
appDiv.innerHTML = Recipes();

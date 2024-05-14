/*
Write a conditional that displays "authenticated content" if the user is authenticated (if isAuth is true).

Display the text "Log in here" if isAuth is false.
*/

function MyApp() {
  const isAuth = true;
  // Ternary operator
  return isAuth === true ? "Authenticated content" : "Log in here";
}

const appDiv = document.getElementById("app");
appDiv.textContent = MyApp(); // Use textContent to set the text

/*
Write a conditional that displays "authenticated content" if the user is authenticated (if isAuth is true).

Display the text "Log in here" if isAuth is false.
*/
function MyApp() {
  const isAuth = true;

  if (isAuth === true) {
    return "authenticated content";
  } else {
    return "Log in here"; // Return the string directly
  }
}

const appDiv = document.getElementById("app");
appDiv.textContent = MyApp(); // Use textContent to set the text

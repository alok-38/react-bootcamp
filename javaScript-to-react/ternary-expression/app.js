function MyApp() {
  const isAuth = false; // Assuming this is the variable indicating whether the user is authenticated

  const message = isAuth ? "Auth user content" : "Log in here";
  return message;
}

const appDiv = document.getElementById("app");
appDiv.innerHTML = MyApp();

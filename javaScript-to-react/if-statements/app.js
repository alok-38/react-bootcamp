function MyApp() {
  const isAuth = true; // Assuming this is the variable indicating whether the user is authenticated

  if (isAuth) {
    return `<div>Authenticated content</div>`;
  } else {
    return `<div>Log in here</div>`;
  }
}
const appDiv = document.getElementById("app");
appDiv.innerHTML = MyApp();

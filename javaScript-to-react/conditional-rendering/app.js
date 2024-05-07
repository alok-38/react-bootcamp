const app = document.getElementById("app");

function MyApp() {
  const isAuth = true;
  return isAuth ? "<div>Authenticated content</div>" : "<div>Log in here</div>";
}

const root = ReactDOM.createRoot(app);
app.innerHTML = MyApp();

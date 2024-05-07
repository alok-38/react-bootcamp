const app = document.getElementById("app");

const language = prompt("Your favorite programming language");
if (language !== null && language.trim() !== "") {
  app.innerHTML = `<h1>Hello ${language}</h1>`;
} else {
  app.innerHTML = `<h1>Hello there!</h1>`;
}

const root = ReactDOM.createRoot(app);

function getLanguage() {
  return "Python";
}

const app = document.getElementById("app");
const language = getLanguage();
app.innerHTML = `<h1>Hello ${language}</h1>`;

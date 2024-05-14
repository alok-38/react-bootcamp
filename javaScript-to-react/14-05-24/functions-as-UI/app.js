// Make our app display the text "Hello Python" using the function getLanguage.
// Make sure to use the string ("python") that is already within the function. Use it to create the desired output in the h1.
function getLanguage() {
  return "python";
}

const app = document.getElementById("app");
app.innerHTML = `<h1>Hello ${getLanguage()}</h1>`;

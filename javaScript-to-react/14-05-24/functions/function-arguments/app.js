// Using an argument passed to the createButton function, make it possible to dynamically
// change the first word within our button.
function createButton(firstWord, remainingText) {
  return `<button>${firstWord} ${remainingText}</button>`;
}

const app = document.getElementById("app");
app.innerHTML = createButton("Like", "Video");

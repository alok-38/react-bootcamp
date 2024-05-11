// Function to create the button element
function createButton(firstWord, restOfText) {
  const button = document.createElement("button");
  button.textContent = `${firstWord} ${restOfText}`;
  button.addEventListener("click", function () {
    toggleButton(button);
  });
  return button;
}

// Function to toggle text
function toggleButton(button) {
  const currentText = button.textContent;
  const newText = currentText.startsWith("Like") ? "Dislike" : "Like";
  button.textContent = newText + currentText.substring(currentText.indexOf(" ")); // Preserve the rest of the text
}

// App initialization
const app = document.getElementById("app");
app.appendChild(createButton("Dislike", "Video"));

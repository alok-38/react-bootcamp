const appDiv = document.getElementById("app");

function getCharacterCount() {
  // Display loading indicator
  const loadingSpan = document.createElement("span");
  loadingSpan.textContent = "Loading...";
  appDiv.appendChild(loadingSpan);

  fetch("https://swapi.dev/api/people/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const count = data.count;
      // Update the UI with the count value
      const charactersElement = document.getElementById("characters");
      charactersElement.textContent = count;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    })
    .finally(() => {
      // Remove loading indicator
      if (loadingSpan.parentNode) {
        loadingSpan.parentNode.removeChild(loadingSpan);
      }
    });
}

getCharacterCount();

appDiv.innerHTML = `
  <p>⭐️ There are <strong id="characters">--</strong> primary characters in Star Wars</p>
`;

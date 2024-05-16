const appDiv = document.getElementById("app");

function getPeople() {
  fetch("https://swapi.dev/api/peoplee/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const count = data.count;
      const charactersCount = document.getElementById("characters");
      charactersCount.textContent = count;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

getPeople();

appDiv.innerHTML = `
  <p>⭐️ There are <strong id="characters">--</strong> primary characters in Star Wars</p>
`;

/*
Make a GET request using the fetch API and the fetch function to the characters endpoint of the Star Wars API.

Use promises and then callbacks in order to get the data back and display the count value in the user interface (in place of the default text, --).
*/
const appDiv = document.getElementById("app");

function getPeople() {
  fetch("https://swapi.dev/api/people/")
    .then((response) => response.json())
    .then((data) => {
      // Extracting the count value from the data
      const count = data.count;
      //   Updating the count value in the user interface
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

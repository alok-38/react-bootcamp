/*
Add the .finally() callback, identical to how you chained on .then() and after it, .catch().

The only difference is that the finally callback does not accept a value. Within the finally callback, when the promise has "settled" (resolved successfully or has been rejected), perform the cleanup step of removing the loading span.
*/
const appDiv = document.getElementById("app");

function getPeople() {
  fetch("https://swapi.dev/api/peoplee/")
    .then((response) => {
      if (!response.ok) {
        throw Error("Unsuccessful response");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("characters").textContent = data.count;
    })
    .catch((err) => {
      console.log("Error fetching data: ", err);
      document.querySelector("p").innerHTML = "Error fetching data";
    })
    .finally(() => {
      const loadingSpan = document.getElementById("loading");
      if (loadingSpan) {
        loadingSpan.remove();
      }
    });
}

getPeople();

appDiv.innerHTML = `
  <span id="loading">Loading...</span>
  <p>⭐️ There are <strong id="characters">--</strong> primary characters in Star Wars</p>
`;

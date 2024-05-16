const features = [
  "✅ Push to deploy",
  "✅ SSL certificates",
  "✅ Simple queues",
];

// Using map() to create an array of <li> elements
const listItemsHTML = features.map((item) => {
  return `
  <li>${item}</li>`;
});

// Joining the array elements into a single string
const listHTML = "<ul>" + listItemsHTML.join("") + "</ul>";

// Assigning the HTML string to the innerHTML of appDiv
const appDiv = document.getElementById("app");
appDiv.innerHTML = listHTML;

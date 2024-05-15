/*
Take the text content from each of the list items in Features. Put them as individual array elements in an array called features.

Use the map array method to iterate over each of these array elements and output them in between the ul tags using template literals.
*/
function Features() {
  const featuresList = [
    "✅ Push to deploy",
    "✅ SSL certificates",
    "✅ Simple queues",
  ];
  // Map each feature to a list item using template literals
  const featuresHTML = featuresList
    .map((feature) => `<li>${feature}</li>`)
    .join("");

  return `
  		<h1>App Features</h1>
		<ul>
			${featuresHTML}
		</ul>
	`;
}

const appDiv = document.getElementById("app");
appDiv.innerHTML = Features();

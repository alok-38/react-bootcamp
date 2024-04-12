// Define the renderFeatures function
const renderFeatures = (features) => {
    // Map array elements to HTML list items
    const featureListItems = features.map(feature => `<li>${feature}</li>`);

    // Join the list items into a single string
    const featureList = featureListItems.join('');

    // Create the HTML string with ul tags
    const htmlOutput = `<ul>${featureList}</ul>`;

    // Get the div element with ID "app"
    const appDiv = document.getElementById('app');

    // Check if the "app" div exists
    if (appDiv) {
        // Render the HTML inside the div
        appDiv.innerHTML = htmlOutput;
    } else {
        console.error('The "app" div does not exist in the document.');
    }
};

// Add an event listener for the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    // Example features array
    const features = [
        "✅ Push to deploy",
        "✅ SSL certificates",
        "✅ Simple queues",
    ];

    // Call the renderFeatures function with the features array
    renderFeatures(features);
});

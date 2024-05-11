function Features() {
  const features = ["Push to deploy", "SSL certificates", "Simple queues"];
  const featureItems = features.map((feature) => `<li>✅ ${feature}</li>`);

  return `
  <h1>App Features</h1>
  <ul>
  	${featureItems.join("")}
  </ul>
  `;
}

const appDiv = document.getElementById("app");
appDiv.innerHTML = Features();

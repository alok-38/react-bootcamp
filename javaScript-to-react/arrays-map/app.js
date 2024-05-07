function Features() {
  const featuresList = [
    "✅ Push to deploy",
    "✅ SSL certificates",
    "✅ Simple queues",
  ];

  return featuresList.map((feature) => `<li>${feature}</li>`);
}

const appDiv = document.getElementById("app");
appDiv.innerHTML = `
	<h1>App Features</h1>
	<ul>
	  ${Features().join("")}
	</ul>
  `;

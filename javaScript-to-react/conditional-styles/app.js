function DownloadButton(props) {
  const { isPaid } = props;

  // Using ternary operators to conditionally set the buttonText and buttonClass
  const buttonText = isPaid ? "Buy Now" : "Download Free";
  const buttonClass = isPaid ? "download-button paid" : "download-button";

  return `
	  <button class="${buttonClass}">
		<span>${buttonText}</span>
	  </button>
	`;
}

const appDiv = document.getElementById("app");
appDiv.innerHTML = DownloadButton({
  isPaid: false, // or false based on your requirement
});

/*
Use ternaries to change the text and class of the DownloadButton markup.

If props.isPaid is true, the .paid class should be added, with the text "Buy Now".

Otherwise, the button should have a green background with the text "Download Free".
*/
function DownloadButton(props) {
  const buttonText = props.isPaid ? "Buy Now" : "Download Free";
  const buttonClass = props.isPaid ? "download-button paid" : "download-button";

  return `
	  <button class="${buttonClass}">
		<span>${buttonText}</span>
	  </button>
	`;
}

const appDiv = document.getElementById("app");
appDiv.innerHTML = DownloadButton({
  isPaid: true,
});

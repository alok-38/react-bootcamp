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

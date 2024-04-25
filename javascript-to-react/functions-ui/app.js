const app = document.getElementById('app');

function getLanguage() {
	const language = prompt("What language do you program in?");
	app.innerHTML = `Hello ${language}`;
}

const buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', getLanguage);
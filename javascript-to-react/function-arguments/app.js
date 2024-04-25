function createButton(options) {
	const { text, id, className, onClick } = options;
	const button = document.createElement('button');

	// Set button text
	button.innerText = text || 'Button';

	// Set Button id
	if (id) {
		button.id = id;
	}

	// Set button class
	if (className) {
		button.className = className;
	}

	// Add click event listener
	if (onClick && typeof onClick === 'function') {
		button.addEventListener('click', onClick);
	}

	return button;
}

const app = document.getElementById('app');
const buttonOptions = {
	text: 'Dislike',
	id: 'dislikeButton',
	className: 'btn btn-danger',
	onClick: () => {
		console.log('Dislike button clicked');
	}
};

app.appendChild(createButton(buttonOptions));
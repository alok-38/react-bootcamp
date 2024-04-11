// Define the language variable
const language = 'JavaScript';

// Get the app element
const app = document.getElementById('app');

// Display initial message
app.innerHTML = `<h1>Hello ${language}</h1>`;

// Function to handle the button click event
const programmingLanguage = () => {
    // Create a message
    let message = document.createElement('h1');
    
    // Prompt the user for input
    let userInput = prompt("Please enter a programming language");
    
    // Set the message content based on user input
    message.textContent = `Hello ${userInput}`;

    // Clear previous content in app element
    app.innerHTML = '';

    // Append the message to the app element
    app.appendChild(message);
}

// Get the button
const buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', programmingLanguage);

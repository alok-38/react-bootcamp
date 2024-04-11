function createButton(firstWord) {
    return `<button>${firstWord} Video</button>`;
}

const app = document.getElementById('app');

// Call createButton with different words
const firstWord1 = 'Like';
const firstWord2 = 'Share';

// Set innerHTML of app with different button texts
app.innerHTML = createButton(firstWord1);

setTimeout(() => {
    app.innerHTML = createButton(firstWord2); // This will change the button text to "Share Video"
}, 2000);
function createButton(action, style) {
    return `<button style="${style}">${action} Video</button>`;
}

function createHeader(title, style) {
    return `<h1 style="${style}">${title}</h1>`;
}

const videoSrc = "https://reactbootcamp.nyc3.digitaloceanspaces.com/big-buck-bunny.mp4";

function createVideo() {
    return `<video controls src="${videoSrc}"></video>`;
}

const app = document.getElementById('app');
app.innerHTML = `
    ${createButton("Like", "background-color: green;")}
    ${createButton("Dislike", "background-color: red;")}
    ${createHeader("Watch", "color: blue;")}
    ${createVideo()}
`;
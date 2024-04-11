const videoSrc = 'https://reactbootcamp.nyc3.digitaloceanspaces.com/big-buck-bunny.mp4';

function createButton(action, style) {
  return `<button style="${style}">${action} Video</button>`;
}

function createHeader(title, style) {
  return `<h1 style="${style}">${title}</h1>`;
}

function createVideo(src) {
  return `<video src="${src}" controls style="width: 100%; height: 300px;"></video>`;
}

const app = document.getElementById('app');
app.innerHTML = `
${createHeader('Watch Big Buck Bunny', 'color: blue;')}
${createVideo(videoSrc)}
${createButton('Like', 'background-color: green;')}
${createButton('Dislike', 'background-color: red;')}
`;

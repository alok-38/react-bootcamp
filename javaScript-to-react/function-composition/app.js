function createButton(action, style) {
  return `<button style="${style}">${action} Video</button>`;
}

function createHeader(title, style) {
  return `<h1 style="${style}">Watch</h1>`;
}

const videoSrc =
  "https://reactbootcamp.nyc3.digitaloceanspaces.com/big-buck-bunny.mp4";

function createVideo() {
  return `<video controls></video>`;
}

const app = document.getElementById("app");
app.innerHTML = `
  ${createHeader("Watch", "color: blue;")}
  ${createButton("Like", "background-color: green;")}
  ${createButton("Dislike", "background-color: red;")}
  ${createVideo()}
`;

// After setting up the HTML content, you might want to set the video source
const videoElement = app.querySelector("video");
videoElement.src = videoSrc;

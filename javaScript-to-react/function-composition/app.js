const app = document.getElementById("app");

function createButton(action, style) {
  return `<button style="${style}">${action} Video</button>`;
}

function createHeader(title, style) {
  return `<h1 style="${style}">Watch ${title}</h1>`;
}

const videoSrc =
  "https://reactbootcamp.nyc3.digitaloceanspaces.com/big-buck-bunny.mp4";

function createVideo(src) {
  return `<video src="${src}" controls style="height: 300px; width: 400px;"></video>`;
}

const videoTitle = "Big Buck Bunny";

app.innerHTML = `
${createHeader(videoTitle, "color: blue;")}
${createVideo(videoSrc)}
${createButton("Like", "background-color: green;")}
${createButton("Dislike", "background-color: red;")}
`;

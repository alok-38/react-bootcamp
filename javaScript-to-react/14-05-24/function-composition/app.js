// Create a video player using createHeader, createVideo and createButton.

// Make the header the video title, prefixed with "Watch".

// Display the video using the videoSrc, passed as an argument.

// Make the video player 300 pixels in height and full width.

// Display a like and dislike button underneath the video.

function createButton(action, style) {
  return `<button style="${style}">${action} Video</button>`;
}

function createHeader(title, style) {
  return `<h1 style="${style}">Watch ${title}</h1>`;
}

const videoSrc =
  "https://reactbootcamp.nyc3.digitaloceanspaces.com/big-buck-bunny.mp4";

function createVideo(source) {
  return `<video src="${source}" controls style="height: 300px; width: 100%;"></video>`;
}

const app = document.getElementById("app");
app.innerHTML = `
${createHeader("Big Buck Bunny", "font-size: 24px;")}
${createVideo(videoSrc)}
${createButton("Like", "background-color: green;")}
${createButton("Dislike", "background-color: red;")}
`;

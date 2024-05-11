const app = document.getElementById("app");

function createTitle() {
  return `<h1>👾 My Computer Setup</h1>`;
}

function createCoverImage(src, height, width) {
  return `<img src="${src}" height="${height}" width="${width}">`;
}

const titleMarkup = createTitle();
const coverImageMarkup = createCoverImage(
  "https://images.unsplash.com/photo-1547082299-de196ea013d6",
  "300px",
  "520px"
);

app.innerHTML = `${titleMarkup}${coverImageMarkup}`;

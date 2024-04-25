function createTitle(titleText) {
    return `<h1>${titleText}</h1>`;
}

function createCoverImage(src, height, width) {
    return `<img src="${src}" height="${height}" width="${width}">`;
}

const app = document.getElementById("app");

// Using the components
app.innerHTML = `
    ${createTitle("👾 My Computer Setup")}
    ${createCoverImage("https://images.unsplash.com/photo-1547082299-de196ea013d6", "300px", "520px")}
`;

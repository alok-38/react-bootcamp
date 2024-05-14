/*
Break the markup displayed on the page into two components.

Display the title in one component and display the cover image in another component.

They can be called createTitle and createCoverImage, for example.

Create src, height and width arguments for the createCoverImage function to be able to change those properties dynamically.

Finally, pass arguments to createCoverImage to set the cover image height to "300px", width to "520px" and set the src to its original value as well.
*/
const app = document.getElementById("app");
const createTitle = () => {
  return `<h1>👾 My Computer Setup</h1>`;
};

const createCoverImage = () => {
  return `<img src="https://images.unsplash.com/photo-1547082299-de196ea013d6" height="300px" width="520px">`;
};

const coverImageSrc =
  "https://images.unsplash.com/photo-1547082299-de196ea013d6";
const coverImageHeight = "300px";
const coverImageWidth = "520px";

app.innerHTML = `
   ${createTitle()}
   ${createCoverImage(coverImageSrc, coverImageHeight, coverImageWidth)}
`;

const app = document.getElementById("app");

// Properties for the cover image
const coverImageProps = {
  src: "https://images.unsplash.com/photo-1547082299-de196ea013d6",
  height: "300px",
  width: "520px",
};

// Define the title component
function createTitle() {
  return <h1>👾 My Computer Setup</h1>;
}

// Define the cover image component
function createCoverImage({ src, height, width }) {
  return <img src={src} height={height} width={width} />;
}

const root = ReactDOM.createRoot(app);

root.render(
  <div>
    {createTitle()}
    {createCoverImage(coverImageProps)}
  </div>
);

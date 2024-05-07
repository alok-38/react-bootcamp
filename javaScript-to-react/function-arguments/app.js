const { useState } = React;

function createButton(firstWord) {
  return <button>{firstWord} Video</button>;
}

function App() {
  const [firstWord, setFirstWord] = useState("Like");

  const handleClick = () => {
    if (firstWord === "Like") {
      setFirstWord("Love");
    } else {
      setFirstWord("Like");
    }
  };

  return (
    <div>
      {createButton(firstWord)}
      <button onClick={handleClick}>Toggle First Word</button>
    </div>
  );
}

const appRoot = document.getElementById("app");
const root = ReactDOM.createRoot(appRoot);
root.render(<App />);

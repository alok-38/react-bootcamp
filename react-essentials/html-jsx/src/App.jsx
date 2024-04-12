import Pricing from "./components/Pricing";
import './App.css';

function App() {
  return (
    <div className="flex justify-center items-center h-screen max-w-96 mx-auto">
      <div className="p-10 leading-10 bg-gradient-to-r from-purple-500 to-pink-500">
        <Pricing />
      </div>
    </div>
  );
}

export default App;

import CreateProfile from "./components/CreateProfile";
import CreatePhoto from "./components/CreatePhoto";

function App() {
    const photoProps = {
        src: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
        width: "500px",
    };
    
    return (
        <div className="max-w-2xl ml-96">
            <CreateProfile />
            <CreatePhoto src={photoProps.src} width={photoProps.width} />
        </div>
    );
}

export default App;

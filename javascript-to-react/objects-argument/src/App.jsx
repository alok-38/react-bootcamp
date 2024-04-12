import CreateProfile from "./components/CreateProfile";
import CreatePhoto from "./components/CreatePhoto";

function App() {
    const photoProps = {
        src: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
        width: "500px",
    };
    
    return (
        <>
            <CreateProfile />
            <CreatePhoto src={photoProps.src} width={photoProps.width} />
        </>
    );
}

export default App;

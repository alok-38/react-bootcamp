function CreatePhoto(props) {
    return (
        <img className="block mx-auto" src={props.src} width={props.width} />
    );
}

export default CreatePhoto;

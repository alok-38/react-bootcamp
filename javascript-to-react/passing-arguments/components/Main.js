const Main = () => {
    const mainDiv = document.createElement('div');
    const image = document.createElement('img');
    image.src = 'https://images.unsplash.com/photo-1547082299-de196ea013d6';
    image.height = '300';
    image.width = '520';
    mainDiv.appendChild(image);
    return mainDiv;
};

export default Main;

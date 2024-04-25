function MyApp() {
    const isAuth = false; // Change this to true for authenticated content
    if (isAuth) {
        return `<div>Authenticated content</div>`;
    } else {
        return `<div>Unauthenticated content</div>`;
    }
}

const appDiv = document.getElementById('app');
appDiv.innerHTML = MyApp();

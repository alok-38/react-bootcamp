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

const isAuth = true; // Set this to true for an authenticated user, false otherwise

const message = isAuth ? "auth user content" : "log in here";

console.log(message);

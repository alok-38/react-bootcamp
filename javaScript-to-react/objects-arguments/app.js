const app = document.getElementById("app");

function createProfile(props) {
  return `
    <header>
      <img class="profile" src="${props.photo}" />
      <span>${props.name}</span>
    </header>
  `;
}

const profileProps = {
  name: "Benjamin Voros",
  photo:
    "https://images.unsplash.com/profile-1584086234832-be18ba3c6918image?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff",
};

const photoProps = {
  src: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  width: "500px",
};

function createPhoto(props) {
  return `
    <img src="${props.src}" width="${props.width}" />
  `;
}

app.innerHTML = `
  <div>
    ${createProfile(profileProps)}
    ${createPhoto(photoProps)}
  </div>
`;

const root = ReactDOM.createRoot(app);

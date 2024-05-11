function createPhoto(props) {
  return `
		<img src="${props.src}" width="${props.width}" />
	 `;
}

// Define profileProps object
const profileProps = {
  imageUrl:
    "https://images.unsplash.com/profile-1584086234832-be18ba3c6918image?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff",
  name: "Benjamin Voros",
};

// Define photoProps object
const photoProps = {
  src: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  width: "500px",
};

// Modified createProfile function to accept profileProps
function createProfile(props) {
  return `
	  <header>
		<img class="profile" src="${props.imageUrl}" />
		<span>${props.name}</span>
	  </header>
	`;
}

// Updated HTML generation to pass profileProps
const app = document.getElementById("app");
app.innerHTML = `
	<div>
	  ${createProfile(profileProps)}
	  ${createPhoto(photoProps)}
	</div>
  `;

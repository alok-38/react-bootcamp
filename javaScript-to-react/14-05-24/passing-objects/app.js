/*
  Create an object and put it in a variable, profileProps.

Figure out what data needs to be passed down as an argument to the profile function.

Add that data as key-value pairs to the profileProps object.

Pass profileProps down to createProfile and display the data that was passed down.
*/
function createProfile() {
  return `
     <header>
       <img class="profile" src${profileProps.profileSrc} />
       <span>${profileProps.name}</span>
     </header>
   `;
}

const photoProps = {
  src: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  width: "500px",
};

const profileProps = {
  profileSrc:
    "https://images.unsplash.com/profile-1584086234832-be18ba3c6918image?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff",
  name: "Benjamin Voros",
};

function createPhoto(props) {
  return `
      <img src="${props.src}" width="${props.width}" />
   `;
}

const app = document.getElementById("app");
app.innerHTML = `
   <div>
   ${createProfile(profileProps)}
   ${createPhoto(photoProps)}
   </div>
`;

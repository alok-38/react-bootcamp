const defaultAvatar = "https://reactbootcamp.nyc3.digitaloceanspaces.com/default-avatar.png";

function createProfile() {
  const user = {
    name: "Brock Wegner",
    // You can remove the avatar property to test this conditional
    avatar: "https://images.unsplash.com/profile-1680533857160-e99b9ea2f17bimage?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
  };

  const profileDiv = document.createElement("div");

  profileDiv.innerHTML = `
    <h1>Welcome, ${user.name}!</h1>
  `;

  if (user.avatar) {
    // Add the avatar only if it exists
    const avatarImg = document.createElement("img");
    avatarImg.src = user.avatar;
    avatarImg.width = "100";
    profileDiv.appendChild(avatarImg);
  }

  return profileDiv;
}

const appDiv = document.getElementById("app");
appDiv.appendChild(createProfile());

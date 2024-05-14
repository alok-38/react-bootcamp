/*
Write a ternary within the returned template literal.

This ternary conditional should display the image from user.avatar if it exists or the defaultAvatar as the src if not.

Both images can use the same width of 100px.
*/

const defaultAvatar =
  "https://reactbootcamp.nyc3.digitaloceanspaces.com/default-avatar.png";

function Profile() {
  const user = {
    name: "Brock Wegner",
    avatar:
      "https://images.unsplash.com/profile-1680533857160-e99b9ea2f17bimage?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff",
  };

  return `
    <div>
      <h1>Welcome, ${user.name}!</h1>
      <img src="${
        user.avatar ? user.avatar : defaultAvatar
      }" width="100px" /> <!-- Ternary operation to choose avatar -->
    </div>
  `;
}

const appDiv = document.getElementById("app");
appDiv.innerHTML = Profile();

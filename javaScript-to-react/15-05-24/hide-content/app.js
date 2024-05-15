/*
Write two conditionals if the user doesn't have an avatar (you can remove it manually to test this):

A conditional that will hide all the displayed markup if there is no avatar (user.avatar).
A conditional that will hide only the avatar if there is no avatar.
*/
function Profile() {
  const user = {
    name: "Brock Wegner",
    avatar:
      "https://images.unsplash.com/profile-1680533857160-e99b9ea2f17bimage?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff",
  };

  // Conditional to hide all displayed markup if there is no avatar
  if (!user.avatar) {
    return ""; // Return an empty string to hide the entire component
  }

  // Conditional to hide only the avatar if there is no avatar
  const avatarMarkup = user.avatar
    ? `<img src="${user.avatar}" alt="${user.name}" />`
    : "";

  return `
	  <div>
		${avatarMarkup}
		<h1>Welcome, ${user.name}!</h1>
	  </div>
	`;
}

const appDiv = document.getElementById("app");
appDiv.innerHTML = Profile();

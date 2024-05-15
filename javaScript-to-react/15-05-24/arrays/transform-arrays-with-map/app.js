/*
Iterate over the members array with map. Within map's inner function, use a template string to display each member within a Member function. Pass each member's data in as an argument

In the Member function, display their image, name within an h3 element and their role within a p element.
*/
const members = [
  {
    name: "Lindsay Walton",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "https://twitter.com/lindsay",
    linkedinUrl: "https://linkedin.com/lindsay",
  },
  {
    name: "Tom Cook",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "https://twitter.com/tom",
    linkedinUrl: "https://linkedin.com/tom",
  },
  {
    name: "Courtney Henry",
    role: "Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "https://twitter.com/courtney",
    linkedinUrl: "https://linkedin.com/courtney",
  },
];

function About() {
  // Map over the members array and generate HTML for each member
  const membersHTML = members.map((member) => Member(member)).join("");

  return `
	  <header>
		<h1>Who we are</h1>
		<h2>Meet the team that makes this all possible</h2>
	  </header>
	  <div class="members">
		${membersHTML}
	  </div>
	`;
}

function Member(member) {
  // Generate HTML for an individual member
  return `
	  <div class="member">
		<img src="${member.imageUrl}" alt="${member.name}">
		<h3>${member.name}</h3>
		<p>${member.role}</p>
	  </div>
	`;
}

const appDiv = document.getElementById("app");
appDiv.innerHTML = About();

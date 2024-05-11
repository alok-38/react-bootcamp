const links = [
  {
    text: "About",
    href: "/company/about",
  },
  {
    text: "Pricing",
    href: "/support/pricing",
  },
  {
    text: "Jobs",
    href: "/company/jobs",
  },
  {
    text: "Press",
    href: "/company/press",
  },
  {
    text: "Documentation",
    href: "/support/docs",
  },
];

function Footer() {
  const supportLinks = links
    .filter((link) => link.href.startsWith("/support"))
    .map((link) => Link(link));
  const companyLinks = links
    .filter((link) => link.href.startsWith("/company"))
    .map((link) => Link(link));

  return `
	  <footer>
		<section>
		  <h4>Support</h4>
		  <div>
			${supportLinks.join("")}
		  </div>
		</section>

		<section>
		  <h4>Company</h4>
		  <div>
			${companyLinks.join("")}
		  </div>
		</section>
	  </footer>
	`;
}

function Link(link) {
  return `
	  <div>
		<a href="${link.href}">
		  ${link.text}
		</a>
	  </div>
	`;
}

const appDiv = document.getElementById("app");
appDiv.innerHTML = Footer();

/*
Use the filter array method to filter the links array into two columns.

One column for the Support links (that start with "/support") and another column for the Company links (that start with "/company").

Hint: in the callback function to filter, you will need to find a way to check and see if the string includes the appropriate text (i.e. "/company")
*/

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
  // Filter the links array into two columns: Support and Company
  const supportLinks = links.filter((link) => link.href.startsWith("/support"));
  const companyLinks = links.filter((link) => link.href.startsWith("/company"));

  // Generate HTML for each link
  const supportLinksHTML = supportLinks.map((link) => Link(link)).join("");
  const companyLinksHTML = companyLinks.map((link) => Link(link)).join("");

  return `
	  <footer>
		<section>
		  <h4>Support</h4>
		  <div>
			${supportLinksHTML}
		  </div>
		</section>

		<section>
		  <h4>Company</h4>
		  <div>
			${companyLinksHTML}
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



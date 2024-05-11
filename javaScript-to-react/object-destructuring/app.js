function Checkbox({ id, label, defaultChecked }) {
  return `
	  <div>
		<label for="${id}">${label}</label>
		<input id="${id}" type="checkbox" ${
    defaultChecked ? 'checked="checked"' : ""
  } />
	  </div>
	`;
}

const appDiv = document.getElementById("app");

appDiv.innerHTML = Checkbox({
  id: "checkbox",
  label: "Subscribe for updates",
  defaultChecked: true,
});

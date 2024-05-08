const todos = [
  {
    done: false,
    text: "Wash dishes",
  },
  {
    done: true,
    text: "Pick up laundry",
  },
  {
    done: true,
    text: "Feed dog",
  },
];

function TodoList() {
  const todoItems = todos.map((todo) => {
    return `
		<li>
		  ${TodoItem(todo)}
		</li>
	  `;
  });

  return `
	  <main>
		<h1>What I did today</h1>
		<ul>
		  ${todoItems.join("")}
		</ul>
	  </main>
	`;
}

function TodoItem(todo) {
  const checkmark = todo.done ? "✔" : "✘";
  return `
	  <span>${checkmark}</span>
	  <span>${todo.text}</span>
	`;
}

const appDiv = document.getElementById("app");
appDiv.innerHTML = TodoList();

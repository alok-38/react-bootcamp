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

function TodoItem(todo) {
  const statusIcon = todo.done ? "✔" : "❌";
  return `
	  <li>
		<span>${statusIcon}</span>
		<span>${todo.text}</span>
	  </li>
	`;
}

function TodoList() {
  const todoItems = todos.map((todo) => TodoItem(todo));
  return `
	  <main>
		<h1>What I did today</h1>
		<ul>
		  ${todoItems.join("")}
		</ul>
	  </main>
	`;
}

const appDiv = document.getElementById("app");
appDiv.innerHTML = TodoList();

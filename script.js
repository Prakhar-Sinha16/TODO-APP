// submit.addEventListener("click", (e) => {
//   e.preventDefault()
//   let titlec = title.value
//   let descc = desc.value
//   localStorage.setItem(titlec, JSON.stringify([titlec, descc]))
//   console.log(e)
//   todo.innerHTML = `
//   <h1>${titlec}</h1>
//   <p>${descc}</p>
//   `
//   title.value = ""
//   desc.value = ""
// })

// deleteBtn.addEventListener("click", (e) => {
//   e.preventDefault()
//   localStorage.removeItem("todo")
//   todo.innerHTML = ""
// })


// Selecting elements
const submit = document.getElementById("submit");
const deleteBtn = document.getElementById("deleteBtn");
const todo = document.getElementById("todo");
const title = document.getElementById("title");
const desc = document.getElementById("desc");

// Function to display todos from LocalStorage
function displayTodosFromLocalStorage() {
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const fullDate = date + '/' + month + '/' + year;

  todo.innerHTML = ""; // Clear previous todos
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const [title, desc] = JSON.parse(localStorage.getItem(key));
    todo.innerHTML += `
      <div class="card conatiner" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Title: ${title} (${fullDate})</h5>
          <p>${desc}</p>
          <a class="delete-todo btn btn-primary" data-key="${key}">Delete</a>
        </div>
      </div>
    `;
  }
}

// Display todos from LocalStorage when the page loads
window.addEventListener("load", displayTodosFromLocalStorage);

// Add todo event listener
submit.addEventListener("click", (e) => {
  e.preventDefault();
  let titlec = title.value;
  let descc = desc.value;
  localStorage.setItem(titlec, JSON.stringify([titlec, descc]));
  displayTodosFromLocalStorage(); // Update todos displayed
  title.value = "";
  desc.value = "";
});

// Delete todo event listener
todo.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-todo")) {
    const key = e.target.getAttribute("data-key");
    localStorage.removeItem(key); // Remove todo from LocalStorage
    displayTodosFromLocalStorage(); // Update todos displayed
  }
});

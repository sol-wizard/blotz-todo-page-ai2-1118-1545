// Find the elements on the page
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

// Listen for a click on "Add", then change the page
addButton.addEventListener("click", function () {
  const text = taskInput.value.trim();
  if (text === "") {
    return; // ignore empty tasks
  }

  const item = document.createElement("li");
  item.textContent = text;

  // Clicking a task marks it as done (click again to undo)
  item.addEventListener("click", function () {
    item.classList.toggle("done");
  });

  taskList.appendChild(item);

  taskInput.value = "";
  taskInput.focus();
});

// "Clear completed" removes every task marked as done
const clearDoneButton = document.getElementById("clear-done-button");
clearDoneButton.addEventListener("click", function () {
  const doneItems = taskList.querySelectorAll("li.done");
  doneItems.forEach(function (item) {
    item.remove();
  });
});

// Pressing Enter in the text box works like clicking "Add"
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addButton.click();
  }
});

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
  taskList.appendChild(item);

  taskInput.value = "";
  taskInput.focus();
});

// Pressing Enter in the text box works like clicking "Add"
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addButton.click();
  }
});

const todoInput = document.querySelector("#todo-input"); //input
const todoInputButton = document.querySelector(".todo-add-button"); //button
const todoList = document.querySelector(".todo-list"); //ul

// deleteItemFromApi(id);

const addTaskToList = (task) => {
  const listElement = document.createElement("li");

  listElement.classList.add("todo-list-item");

  listElement.appendChild(document.createTextNode(task.description));

  todoList.appendChild(listElement);
};

getItemsFromApi().then((data) => {
  data.map((task) => {
    addTaskToList(task);
  });
});

//When clicking the add button, task will be added to ul

//
todoInputButton.addEventListener("click", () => {
  const data = {
    description: todoInput.value,
    done: false,
  };

  postItemToApi(data).then((response) => {
    addTaskToList(response);
  });

  todoInput.value = "";
});

//remove task from list
const removeTasksFromList = (tasks) => {
  const taskListElement = document.querySelector(".todo-list");

  tasks.map((task) => {
    const listElement = document.removeElement("li");

    listElement.classList.remove("todo-list-item");

    listElement.removeChild(document.createTextNode(task.description));

    taskListElement.removeChild(listElement);
  });
};

getItemsFromApi().then((dats) => {
  removeTasksFromList(data);
});

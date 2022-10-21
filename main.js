//const
const todoInput = document.querySelector("#todo-input"); //input
const todoInputButton = document.querySelector(".todo-add-button"); //button
const todoList = document.querySelector(".todo-list"); //ul

//queryselector

const addTaskToList = (task) => {
  const listElement = document.createElement("li");

  listElement.classList.add("todo-list-item");

  listElement.appendChild(document.createTextNode(task.description));

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "<i class='fa-sharp fa-solid fa-xmark'></i>";
  //  deleteButton.addEventListener("click", () =>{
  //    const data
  //  })

  listElement.appendChild(deleteButton);

  todoList.appendChild(listElement);
};

getItemsFromApi().then((data) => {
  data.map((task) => {
    addTaskToList(task);
  });
});

//When clicking the add button, task will be added to ul

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

//add close button to li
const listElement = document.createElement("li");
listElement.querySelector;

// deleteItemFromApi(id);

const removeTasksFromList = (data) => {
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

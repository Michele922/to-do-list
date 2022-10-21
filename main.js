// Constants
const todoInput = document.querySelector("#todo-input"); //input
const todoInputButton = document.querySelector(".todo-add-button"); //button
const todoList = document.querySelector(".todo-list"); //ul

// Functions

const removeTaskFromList = (id) => {
  const todoToDelete = document.querySelector(`#todo-${id}`);

  todoToDelete.remove();
};

const addTaskToList = (task) => {
  const listElement = document.createElement("li");

  listElement.classList.add("row", "todo-list-item");
  listElement.setAttribute("id", `todo-${task._id}`);

  listElement.appendChild(document.createTextNode(task.description));

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "<i class='fa-sharp fa-solid fa-xmark'></i>";
  deleteButton.addEventListener("click", () => {
    deleteItemFromApi(task._id)
      .then(() => {
        removeTaskFromList(task._id);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  listElement.appendChild(deleteButton);

  todoList.appendChild(listElement);
};

// EventListeners

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

// Functions to run

getItemsFromApi().then((data) => {
  data.map((task) => {
    addTaskToList(task);
  });
});

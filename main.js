const testData = [
  {
    description: "Get milk",
    done: false,
    _id: "6e027411-3c48-48ea-84af-0c2011f81f8c",
    _createdOn: "2022-10-18T11:52:03.974Z",
  },
  {
    description: "Take kids out of school",
    done: false,
    _id: "6e027411-3c48-48ea-84af-0c2311f81f8c",
    _createdOn: "2022-10-18T11:52:03.974Z",
  },
  {
    description: "Read a book",
    done: false,
    _id: "6e027411-3c48-48ea-84af-0c7811f81f8c",
    _createdOn: "2022-10-18T11:52:03.974Z",
  },
];

const addTasksToList = () => {
  const taskListElement = document.querySelector(".todo-list");

  testData.map((task) => {
    const listElement = document.createElement("li");

    listElement.classList.add("todo-list-item");

    listElement.appendChild(document.createTextNode(task.description));

    taskListElement.appendChild(listElement);
  });
};

addTasksToList();

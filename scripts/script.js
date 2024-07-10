const $ = document;

const inputBox = $.querySelector("#inputBox");
const addTaskBtn = $.querySelector("#addTaskBtn");

inputBox.addEventListener("keydown", (e) => {
  e.code == "Enter" && addTask();
});
addTaskBtn.addEventListener("click", addTask);

const listContainer = $.querySelector(".list-container");

function addTask() {
  if (inputBox.value.trim() == "") {
    alert("you must write something!");
  } else {
    let taskElem = $.createElement("li");
    taskElem.innerHTML = inputBox.value;
    let delTaskElem = $.createElement("span");
    delTaskElem.innerHTML = "\u00d7";
    taskElem.appendChild(delTaskElem);
    listContainer.appendChild(taskElem);
  }
  saveTask();
  inputBox.value = "";
}

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
  }
  saveTask();
});

function saveTask() {
  localStorage.setItem("taskList", listContainer.innerHTML);
}
function loadTask() {
  listContainer.innerHTML = localStorage.getItem("taskList");
}
window.addEventListener("load", loadTask);

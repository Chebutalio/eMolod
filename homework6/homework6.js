let input = document.getElementById("new");
let addButton = document.getElementsByTagName("button")[0];
let incomTaskHolder = document.getElementById("incom-tasks");
let completedTasksHolder = document.getElementById("completed-tasks");

let createNewTaskElement = function(taskString) {
	let listItem = document.createElement("li");
	let checkBox = document.createElement("input");
	let label = document.createElement("label");
	let editInput = document.createElement("input");
	let editButton = document.createElement("button");
	let deleteButton = document.createElement("button");
	label.innerText = taskString;
	checkBox.type = "checkbox";
	editInput.type = "text";
	editButton.innerText = "Редагувати";
	editButton.className = "edit";
	deleteButton.innerText = "Видалити";
	deleteButton.className = "delete";
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	return listItem;
}

let addTask = function() {
	let listItem = createNewTaskElement(input.value);
	incomTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
	input.value = "";
}

let editTask = function() {
	let listItem = this.parentNode;
	let editInput = listItem.querySelector('input[type=text]');
	let label = listItem.querySelector("label");
	let containsClass = listItem.classList.contains("editMode");
	if (containsClass) {
	label.innerText = editInput.value;
	} else {
			editInput.value=label.innerText;
		}
	listItem.classList.toggle("editMode");
}

let deleteTask = function() {
	let listItem = this.parentNode;
	let ul = listItem.parentNode;
	ul.removeChild(listItem);
}

let taskCompleted = function() {
	let listItem = this.parentNode;
	completedTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskIncom);

}
let taskIncom = function() {
	let listItem = this.parentNode;
	incomTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem,taskCompleted);
}

addButton.addEventListener("click",addTask);
let bindTaskEvents = function(taskListItem,checkBoxEventHandler) {
	let checkBox = taskListItem.querySelector("input[type=checkbox]");
	let editButton = taskListItem.querySelector("button.edit");
	let deleteButton = taskListItem.querySelector("button.delete");
	editButton.onclick = editTask;
	deleteButton.onclick = deleteTask;
	checkBox.onchange = checkBoxEventHandler;
}

	for (let i = 0; i < incomTaskHolder.children.length; i++) {
		bindTaskEvents(incomTaskHolder.children[i],taskCompleted);
	}
	for (let i = 0; i < completedTasksHolder.children.length; i++) {
		bindTaskEvents(completedTasksHolder.children[i],taskIncom);
	}
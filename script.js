let input = document.querySelector("#item");
let list = document.querySelector("ul");
let button = document.querySelector("button");
button.onclick = run;
function run() {
	let value = input.value;
	input.value = "";
	let line = document.createElement("li");
	list.append(line);
	let span = document.createElement("span");
	let deleteButton = document.createElement("button");
	line.append(span);
	line.append(deleteButton);
	deleteButton.innerText = "Delete";
	span.innerText = value;
}

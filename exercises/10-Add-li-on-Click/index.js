let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	// creo el nuevo elemento
	let element = document.createElement("li")
	// creo el texto del mismo
	let text = document.createTextNode("prueba")
	// indico de quien es hijo
	element.appendChild(text);
	// me traigo la lista
	let list = document.querySelector("#myList")
	// agrego a mi lista los nuevos hijos que son el elemento (li)
	list.appendChild(element);


});

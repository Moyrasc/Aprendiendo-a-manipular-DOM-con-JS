let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	// con esta variable estoy creando el nuevo elemento en este cado el div
	let newDiv = document.createElement("div")
	// aqui le añado al html el texto que quiero que me muestre
	newDiv.innerHTML = "Hello World"
	// aquí modifico el background, primero tiene que ir siempre la etiqueta style
	newDiv.style.background = "yellow"
	// y por último le digo quien es su padre (sin esto no funciona)
	document.body.appendChild(newDiv)
	
});
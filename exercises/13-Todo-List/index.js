// Your code here
const tareaNueva = document.querySelector("#addToDo")
const borrarTarea = document.querySelector(".fa fa-trash")



tareaNueva.addEventListener("keyup", function(e){
    
    const list = document.querySelector("ul")
    
    if(e.key === "Enter" || e.keyCode === 13){
        let addTask = document.createElement("li")
        addTask.appendChild(list)
        
    }
    
    

})

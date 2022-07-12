// Your code here
const newTask = document.querySelector("#addToDo");
// const deleteTask = document.querySelector(".fa-trash");

newTask.addEventListener("keyup", (e) => {

    if (e.key === "Enter" || e.keyCode === 13) {
        let list = document.querySelector("ul");
        let addTask = document.createElement("li");
        let textTask = e.target.value;
        addTask.innerHTML = `<span><i class="fa fa-trash"></i></span>${textTask}`;
        list.appendChild(addTask)

    }
    const deleteTask = document.querySelectorAll(".fa-trash");

    deleteTask.forEach(element => {
        element.addEventListener("click", (e) => {
            let removeLi = element.parentNode
            removeLi.parentNode.remove(removeLi);
        })
    });




});

// const deleteTask = document.querySelectorAll(".fa-trash");

// deleteTask.forEach(element => {
//     element.addEventListener("click", (e) => {
//         let removeLi = element.parentNode
//         removeLi.parentNode.remove(removeLi);
//     })
// });

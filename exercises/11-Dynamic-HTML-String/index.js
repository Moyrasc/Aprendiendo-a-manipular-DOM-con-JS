let myString = `<p>Hello!</p> <strong>My friend</strong>`;
document.write(myString)


function year() {
     let day = new Date(); 
     let now = day.getFullYear(); 
     document.getElementsByName("myString").innerHTML = now; 
}
document.write(myString.append(year));

// newDate = new Date()
// let year = newDate.getFullYear()
// console.log(year)
// let yearString = `we are in the year`
// myString.append(`we are in the year`, year)


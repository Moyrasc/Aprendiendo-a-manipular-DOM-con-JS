let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here

let selectCountries = document.querySelector("#mySelect");
countries.forEach(country => {
    let optionCountry = document.createElement("option")
    optionCountry.innerHTML = country;
    selectCountries.appendChild(optionCountry)
})


selectCountries.addEventListener("change", (e) => {
    const select = `${e.target.value}`
    alert(select)
})




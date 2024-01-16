window.addEventListener("DOMContentLoaded", async () => {
    const RESPONSE = await fetch("https://restcountries.com/v3.1/all");
    const responseJson = await RESPONSE.json(); // json()(von json) parst in array
    const gridWrapper = document.querySelector("grid-body");
    console.log(responseJson[0]);
    for (const land of responseJson) {
        const item = document.createElement("section");

        item.innerHTML += `<figure><img src=${land.flags.png} alt="flag of ">
            <h2>${land.name.common}</h2>
            <p><b>Population: </b>${land.population.toLocaleString()}</p>
            <p><b>Region: </b> ${land.region} 
            <p><b>Capital: </b> ${land.capital}</figure>`;
        gridWrapper.appendChild(item);
    }
    const inputField = document.getElementById("countries");
    const selectField = document.getElementById("continentSelection");

    inputField.addEventListener("input", (event) => {
        const inputValue = event.target.value;
        responseJson.filter((countries) => {
            if (countries.name.common.toLowerCase().includes(inputValue.toLowerCase())) {
                return console.log(countries.name.common, inputValue);
            }
        });

        selectField.addEventListener("change", (event) => {
            const valueSelect = event.target.value;
            console.log(valueSelect);
        });
    });
});

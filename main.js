function render(countries) {
    const gridWrapper = document.querySelector("grid-body");
    gridWrapper.innerHTML = "";
    for (const land of countries) {
        const item = document.createElement("section");
        item.innerHTML += `<figure><img src=${land.flags.png} alt="flag of ">
            <h2>${land.name.common}</h2>
            <p><b>Population: </b>${land.population.toLocaleString()}</p>
            <p><b>Region: </b> ${land.region}</p>
            <p><b>Capital: </b> ${land.capital}</p></figure>`;
        gridWrapper.appendChild(item);
    }
}

async function main() {
    const RESPONSE = await fetch("https://restcountries.com/v3.1/all");
    const countries = await RESPONSE.json(); // json()from json changed to array
    render(countries);

    const inputField = document.getElementById("countries");
    const selectField = document.getElementById("continentSelection");

    function handleClick(event) {
        const inputValue = event.target.value;
        let filteredCountries = countries.filter((country) => {
            return country.name.common.toLowerCase().includes(inputValue.toLowerCase());
        });
        console.log(filteredCountries);
        render(filteredCountries);
    }

    inputField.addEventListener("input", handleClick);
    selectField.addEventListener("change", (event) => {
        // todo return aufräumen
        const valueSelect = event.target.value;
        return console.log(valueSelect);
    });
}
window.addEventListener("DOMContentLoaded", main);

const fetchCountry = async () => {
    try {
        const reponse = await fetch('https://restcountries.com/v3.1/region/europe')
        const country = await reponse.json()
        // Afficher le nom de chaque user dans la page html
        const countryList = document.querySelector('#list-pays')
        // Afficher le nom de chaque utilisateur dans un <p>
        countryList.innerHTML = country
            .map((country) =>
                `<div 
data-image="${country.flags.png}" data-nom="${country.name.common}" data-capital = "${country.capital}" data-code="${country.cioc}"
data-population="${country.population}" data-region="${country.continents}" data-langues="${country.languages}" data-monaie="${country.currencies.name}"
data-superficie="${country.area}" 
 class="card m-3 col-6 m-2" id="card-country" style="width: 18rem;">
                    <img class="card-img-top mt-3" src="${country.flags.png}" alt="Card flag image ">
                    <hr>
                    <div class="card-body">
                        <h5 class="card-title">${country.name.common}</h5>
                        <p class=""><span class="fw-bold">Capital :</span> ${country.capital}</p>
                        <p class=""><span class="fw-bold">Population :</span> ${country.population}</p>
                    </div>
                </div>`)
            .join('')

    } catch (erreur) {
        console.log(erreur)
    }
}
fetchCountry()


const countriesList = document.querySelector('#list-pays')
countriesList.addEventListener("click",(e) => {
    const target = e.target.closest(".card")

    const img = document.querySelector('#img-detail')
    const imgCountry = target.dataset.image
    img.src=imgCountry
    const titre = document.querySelector('#titre-detail')
    const titreCountry = target.dataset.nom
    titre.textContent=titreCountry
x
})
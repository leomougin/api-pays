const fetchCountry = async () => {
    try {
        const reponse = await fetch('https://restcountries.com/v3.1/region/europe')
        const country = await reponse.json()
        console.log(country)

        const countryList = document.querySelector('#list-pays')
        countryList.innerHTML = country
            .map((country) =>
                `<div 
data-image="${country.flags.png}" data-nom="${country.name.common}" data-capital = "${country.capital}" data-code="${country.cioc}"
data-population="${country.population}" data-region="${country.continents}" data-langues="${Object.values(country.languages).join(', ')}"
 data-monnaie="${Object.values(country.currencies)[0].name}" data-superficie="${country.area}" 
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

        document.querySelectorAll('.card').forEach(card=>{
            card.addEventListener("click",(e) => {
                const target = e.target.getAttribute("detailPays")
                details(country[target])
            })
        })
    } catch (erreur) {
        console.log(erreur)
    }
}
            const details=(country) =>
            {
                const detail=document.querySelector('#detail')
                const plus=document.querySelector('#plus')
                plus.innerHTML =  `
                <div class="row">
                    <div class="col-3" id="img">
                          <img src="${country.flags.svg}" alt="">
                    </div>
                    <div class="col-1">
                        <p class="fw-bold fs-5">${country.name.common}</p>
                    </div>
                    <div class="div" id="a-propos">
                    </div>
                    <div class="col-4">
                        <p><span class="fw-bold">Capital :</span> ${country.capital}</p>
                        <p><span class="fw-bold">Population :</span> ${country.population}</p>
                        <p><span class="fw-bold">Région :</span> ${country.continents}</p>
                        <p><span class="fw-bold">Sous région :</span></p>
                    </div>
                    <div class="col-4">
                        <p><span class="fw-bold">Langues :</span> ${Object.values(country.languages).join(', ')}</p>
                        <p><span class="fw-bold">Monaies :</span> ${Object.values(country.currencies)[0].name}</p>
                        <p><span class="fw-bold">Superficie :</span> ${country.area} km²</p>
                        <p><span class="fw-bold">Code pays :</span> ${country.cca2}</p>
                    </div>
                </div>
                  `
                detail.style.display='block'
            }


fetchCountry()



    //
    //     const img = document.querySelector('#img-detail')
    //     const imgCountry = target.dataset.image
    //     img.src=imgCountry
    //     const pays = document.querySelector('#pays-detail')
    //     const paysCountry = target.dataset.nom
    //     pays.textContent=paysCountry
    //     const capital = document.querySelector('#capital-detail')
    //     const capitalCountry = target.dataset.capital
    //     capital.textContent=capitalCountry
    //     const population = document.querySelector('#population-detail')
    //     const populationCountry = target.dataset.population
    //     population.textContent=populationCountry
    //     const region = document.querySelector('#region-detail')
    //     const regionCountry = target.dataset.region
    //     region.textContent=regionCountry
    //     const langue = document.querySelector('#langue-detail')
    //     const langueCountry=target.dataset.langues
    //     langue.textContent=langueCountry
    //     const monnaie = document.querySelector('#monnaie-detail')
    //     const monnaieCountry= target.dataset.monnaie
    //     monnaie.textContent=monnaieCountry
    //     const superficie=document.querySelector('#superficie-detail')
    //     const superficieCountry=target.dataset.superficie
    //     superficie.textContent=superficieCountry
    //     const codePays = document.querySelector('#code-pays-detail')
    //     const codePaysCountry = target.dataset.code
    //     codePays.textContent=codePaysCountry
    // })




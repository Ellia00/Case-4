const landing = document.querySelector("#landing");
const searchFormEl = document.querySelector("#searchForm");



searchFormEl.addEventListener("submit", (e) => {

    e.preventDefault()

    let searchString = e.target.search.value
    console.log(searchString, "this is target")


    // fetch(`https://images-api.nasa.gov/search?q=${searchString}`)

        fetch("sputnikAPI.json")
        .then((Response) => Response.json())
        .then((data) => {
            console.log(data)

            let { items } = data.collection

            // console.log(data.collection.items[2].links[0].href)

            items.forEach(element => {
                console.log(element.links?.[0].href)
                // kan också loopas med en if sats som kollar om hur lång links är och om den har en nolla i, för alla har inte det, därför den crahsar utan ?
                landing.innerHTML += `

        <div class="card">
            <div class="cardTitle">${element.data[0].title}</div>
            <img src="${element.links?.[0].href}" class ="cardImg"> 
            <div class="cardText">"${element.data[0].description}"</div>
          </div>         
            `;
            });
        });
})
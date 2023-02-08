const landing = document.querySelector("#landing");
const searchFormEl = document.querySelector("#searchForm");



searchFormEl.addEventListener("submit", (e) => {

    e.preventDefault()

    let searchString = e.target.search.value

    landing.innerHTML = ""

    fetch(`https://images-api.nasa.gov/search?q=${searchString}`)

        // fetch("sputnikAPI.json")
        .then((Response) => Response.json())
        .then((data) => {
            console.log(data)

            let { items } = data.collection

            let filteredArray = []

            if (document.getElementById("b2000").checked) {
                console.log("b2000 is checked")
                filteredArray = data.collection.items.filter(item => new Date(item.data[0].date_created) < new Date("2000-01-01T00:00:00Z"))
            }

            else if (document.getElementById("a2000").checked) {
                console.log("a2000 is checked")
                filteredArray = data.collection.items.filter(item => new Date(item.data[0].date_created) > new Date("2000-01-01T00:00:00Z"))
            }
            else {
                console.log("none is checked")
                filteredArray = items
            }

            filteredArray.forEach(element => {

                if (element.hasOwnProperty("links")) {

                    landing.innerHTML += `
                    <div class="card">
            
                    <div class="border">
                        <div class="cardTitle">${element.data[0].title}</div>
                        <img src="${element.links?.[0].href}" class ="cardImg"> 
                        <div class="cardText">"${element.data[0].description}"</div>
                        <div class="cardText">"Date ${element.data[0].date_created}"</div>

                      </div>         
                      </div>         
                        `;
                }

            });
        })
        .catch(err => {
            landing.innerHTML =
                `
                <h1 id="noData"> No Data Found</h1>
                `
        })
})
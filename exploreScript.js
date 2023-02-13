const landing = document.querySelector("#landing");
const searchFormEl = document.querySelector("#searchForm");

function render(element) {

    landing.innerHTML += `
                    <div class="card">
            
                    <div class="border">
                        <div class="cardTitle">${element.data[0].title}</div>
                        <img src="${element.links?.[0].href}" class ="cardImg"> 
                        <div class="cardText">"${element.data[0].description}"</div>
                        <div class="cardText">"Date: ${element.data[0].date_created.slice(0, 10)}"</div>

                      </div>         
                      </div>         
                        `;
}

function renderNoData() {
    landing.innerHTML = `<h1 id="noData"> No Data Found</h1> `
}

searchFormEl.addEventListener("submit", (e) => {

    e.preventDefault()

    landing.innerHTML = ""

    let searchString = e.target.search.value


    fetch(`https://images-api.nasa.gov/search?q=${searchString}`)

        // fetch("sputnikAPI.json")
        .then((Response) => Response.json())
        .then((data) => {
            console.log(data)

            let { items } = data.collection


            if (items.length === 0) {
                renderNoData()
            }


            let filteredArray = []

            if (document.getElementById("b2000").checked) {
                filteredArray = data.collection.items.filter(item => new Date(item.data[0].date_created) < new Date("2000-01-01T00:00:00Z"))
            }

            else if (document.getElementById("a2000").checked) {
                filteredArray = data.collection.items.filter(item => new Date(item.data[0].date_created) > new Date("2000-01-01T00:00:00Z"))
            }
            else {
                filteredArray = items
            }

            filteredArray.forEach(element => {

                if (element.hasOwnProperty("links")) {
                    render(element)
                }

            });
        })
        .catch(err => {
            renderNoData()
        })
})
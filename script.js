
const landing = document.querySelector("#landing")





fetch("https://api.nasa.gov/planetary/apod?api_key=sVD3HU6LgpUjcjaQsPav08IsNQ2AmQ3Y5sRoyOM9")
    // metoden response.json() omvanldar json till objekt(man "slipper" använda parse)
    .then((Response) => Response.json())
    .then((data) => {
        // visa data
        console.log("data", data)



        landing.innerHTML = ` this is todays picture
        <img src="${data.url}" alt="">`
        console.log(data.url)

    })
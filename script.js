const landing = document.querySelector("#landing");
const yo = document.querySelector("#yo");

fetch("https://api.nasa.gov/planetary/apod?api_key=sVD3HU6LgpUjcjaQsPav08IsNQ2AmQ3Y5sRoyOM9")
// fetch("apod.json")

  .then((Response) => Response.json())
  .then((data) => {

    landing.innerHTML += ` 
        <h1 id="title">${data.title}</h1>
        <img src="${data.url}" alt="">
        <p id ="explanation">${data.explanation}</p>`;
  })
  .catch(err => {
    landing.innerHTML =
        `
        <h1 id="noData"> No Data Found</h1>
        `
})
const landing = document.querySelector("#landing");
const yo = document.querySelector("#yo");

// fetch(
//   "https://api.nasa.gov/planetary/apod?api_key=sVD3HU6LgpUjcjaQsPav08IsNQ2AmQ3Y5sRoyOM9"
// )
fetch(
  "apod.json"
)

  // metoden response.json() omvanldar json till objekt(man "slipper" använda parse)
  .then((Response) => Response.json())
  .then((data) => {
    // visa data
    console.log("data", data);

    landing.innerHTML = ` 
        <h1 id="title">${data.title}</h1>
        <img src="${data.url}" alt="">
        <p id ="explanation">${data.explanation}</p>`;
    console.log(data.url);
  });


// fetch(
//   "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=sVD3HU6LgpUjcjaQsPav08IsNQ2AmQ3Y5sRoyOM9"
// )
//   // metoden response.json() omvanldar json till objekt(man "slipper" använda parse)
//   .then((Response) => Response.json())
//   .then((data) => {
//     // visa data
//     console.log("data", data);

//     yo.innerHTML = `
//     <img src="${data.photos[0].img_src}" alt="">`;
//     console.log(data.photos[0].img_src)
//   });

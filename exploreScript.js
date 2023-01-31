




// fetch("https://images-api.nasa.gov/search?q=sputnik")
fetch("sputnikAPI.json")
    .then((Response) => Response.json())
    .then((data) => {
        console.log(data)
        let { items } = data.collection

        items.forEach(element => {
            console.log(element.links)
            let a = [element.links]

        });




        // a.forEach(element => {
        //     console.log(element.links[0], "hej hej")
        //     return b = element.links
        //     // loopa igen

        // });

        // b.forEach(element => {
        //     console.log(element.href)
        // });


        yo.innerHTML =

            ` <img src="${data.collection.items[1].links[0].href}" alt=""> `;




        // console.log("yeehaaw", data.collection.items[1].links[0].href);



        // for (const property in data.collection.items) {
        //     if (Object.hasOwnProperty.call(data.collection.items, property)) {
        //         // console.log(data)
        //         // console.log(data.collection.items[property])
        //         // console.log(data.collection.items[property].links)
        //     }
        // }

    });





// fetch("https://images-api.nasa.gov/search?q=sputnik")
fetch("sputnikAPI.json")
    .then((Response) => Response.json())
    .then((data) => {
        console.log(data)
        let { items } = data.collection
        console.log(data.collection.items[2].links[0].href)

        items.forEach(element => {
            // console.log(element.links)



        });

        let a = [data.collection.items]
        console.log(a)

        for (let i = 0; i < a.length; i++) {
            const element = a[i];
            console.log(element)

            for (let x = 0; x < element.length; x++) {
                const link = element[x];
                console.log(link.links)

            }

        }


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
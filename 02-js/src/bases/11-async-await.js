// Async - Await

/* const getImagePromise = () => {
    const promesa = new Promise((resolve, reject) => {
        resolve('asasasasasdsda');
    });
    return promesa;
}

getImagePromise()
    .then(console.log); */

const getImage = async () => {

    try {
        const apiKey = 'cSXVxgEDGCj9FVNNwGDwXhEqThjsxqwA';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        return data;
    } catch (error) {
        // Manejo del error
        console.error(error);
    }


}

getImage()
    .then((data) => {
        const { url } = data.images.original;
        console.log(url);

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);


//     // Fetch API

// const apiKey = 'cSXVxgEDGCj9FVNNwGDwXhEqThjsxqwA';

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// /* peticion
//     .then((resp) => {
//         resp.json()
//             .then((data) => {
//                 console.log(data);
//             })
//             .catch(console.warn);
//     })
//     .catch(console.warn); */

// peticion
//     .then((resp) => resp.json())
//     .then(({data}) => {
//         const { url } = data.images.original;
//         console.log(url);

//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append(img);
//     })
//     .catch(console.warn); 
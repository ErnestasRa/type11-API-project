// 6. Sukurti naują puslapį album.html ir jame atvaizduoti:
//   6.1. Albumo pavadinimą.
//   6.2. Album autoriaus vardą. Paspaudus ant vardo - nukreipiama į autoriaus puslapį.
//   6.3. Skiltis, kurioje atvaizduojamos visos albumo nuotraukos. Panaudoti library (biblioteką), kuri skirta gražiam galerijos atvaizdavimui, pvz.:
//     6.3.1. https://photoswipe.com/
//     6.3.2. https://nanogallery2.nanostudio.org/
//     6.3.3. https://sachinchoolur.github.io/lightgallery.js/
//     6.3.4. Arba bet kurią kitą.

let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams);
let albumId = urlParams.get('album_id');


fetch(`https://jsonplaceholder.typicode.com/albums/?_limit=15`)
.then(res => res.json())
.then(albums => {
    let albumItem = document.getElementById('album-wrapper')
    albumItem.innerHTML = '<h2>Albums:</h2>'
    albums.map(album => {
       fetch(`https://jsonplaceholder.typicode.com/users/${album.userId}`)
       .then(res=>res.json())
       .then(data =>{

        fetch(`https://jsonplaceholder.typicode.com/photos/${album.id}`)
        .then(res=>res.json())
        .then(photos => {
        
        let albumElement = document.createElement('div')
        albumElement.innerHTML = `<h3>${album.title}</h3>
                                  <h4><a href="./user.html?user_id=${data.name}"></a></h4>
                                  <img src="${photos.thumbnailUrl}"> </img>
                                  `
         
        albumItem.append(albumElement)
       
    })
    })
   })
})
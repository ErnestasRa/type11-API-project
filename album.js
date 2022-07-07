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
let albumTitle = urlParams.get('album_title')
let userId = urlParams.get('user_id')
let userName = urlParams.get('user_name')



fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
.then(res => res.json())
.then(photos => {
    if(photos.length > 0) {
        let albumWrapper = document.getElementById('album-wrapper')

        let albumTitleElement = document.createElement('h1')
        albumTitleElement.classList.add('album-title')
        albumTitleElement.textContent = albumTitle
    
        let albumAuthorElement = document.createElement('span')
        albumAuthorElement.classList.add('album-title')
        albumAuthorElement.innerHTML = `<strong>Album author:</strong> <a href="./user.html?user_id=${userId}">${userName}</a>`
        console.log(userName)
        let albumPhotos = document.createElement('div')
        albumPhotos.classList.add('album-photos')
    
        albumWrapper.append(albumTitle,albumAuthorElement,albumPhotos)
    
        photos.map(photo => {
            let imageElement = document.createElement('img')
            imageElement.src = photo.thumbnailUrl
            imageElement.classList.add('album-image')
            imageElement.setAttribute('alt', photo.title)
    
            albumPhotos.prepend(imageElement)
        })
    } else {
        albumWrapper.innerHTML = `<h1>Albums not found</h1>`
    }
  
})
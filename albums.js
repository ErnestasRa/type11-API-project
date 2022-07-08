


fetch(`https://jsonplaceholder.typicode.com/albums/?_limit=40`)
.then(res => res.json())
.then(albums => {
    let albumWrapper = document.getElementById('albums-wrapper')
    albumWrapper.classList.add('album-wrapper')
    albumWrapper.innerHTML = `<h1>All albums: </h1>`
    albums.map(album => {
        fetch(`https://jsonplaceholder.typicode.com/users/${album.userId}`)
        .then(res => res.json())
        .then(users => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${users.id}?${album.id}`)
        .then(res =>res.json())
        .then(userAlbums => {
            let count = 0
            for(let prop in userAlbums) {
                if(userAlbums.hasOwnProperty(prop))
                count++
            }
        
        let albumsElement = document.createElement('div')
        albumsElement.innerHTML = `<h2>${album.title}</h2>
                                    <h3> <a href="./user.html?user_id=${users.id}">${users.name}</a></h3>
                                    <h4>${users.name} has ${count} photos</h4>
                                    <img src="${userAlbums.thumbnailUrl}">  </img>`
       

        albumWrapper.append(albumsElement)
    })
    })
})
})

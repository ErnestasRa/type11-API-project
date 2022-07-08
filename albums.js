let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams);
let userId = urlParams.get('user_id');

let albumWrapper = document.getElementById('albums-wrapper')

fetch('https://jsonplaceholder.typicode.com/albums')
.then(res => res.json())
.then(albums => {

  albums.map(album => {
    let albumItem = document.createElement('div');
    albumItem.classList.add('album-item');

    fetch('https://jsonplaceholder.typicode.com/users/' + album.userId)
      .then(res => res.json())
      .then(user => {

        fetch(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos?_limit=1`)
          .then(res => res.json())
          .then(photos => {
            albumItem.innerHTML = `<h3><a href="./album.html?album_id=${album.id}&album_title=${album.title}&user_id=${album.userId}&user_name=${user.name}">${album.title}</a></h3>
                                   <div>Album created by:<a href="./user.html?user_id=${user.id}">${user.name}</a> </div>
                                   <img src="${photos[0].thumbnailUrl}">`;
          })
      })

      albumWrapper.prepend(albumItem);
  })


})
let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams);
let userId = urlParams.get('user_id');
let searchValue = window.sessionStorage.getItem('searchInput');
let searchResult = document.getElementById('search-result')

fetch(`https://jsonplaceholder.typicode.com/users`)
  .then(res => res.json())
  .then(users => {
    users.map(user => {
        let userItem = document.createElement('div')
        userItem.classList.add('user-item')
        userItem.innerHTML = `  <h2><a href="./user.html?user_id=${user.id}">${user.name}</a> (${user.username})</h2>
                                <ul>
                                <li><strong>Email:</strong> <a href="mailto:${user.email}">${user.email}</a></li>
                                <li><strong>Phone:</strong> <a href="tel:${user.phone}">${user.phone}</a></li>
                                <li><strong>Address:</strong> <a href="#">${user.address.street} ${user.address.suite}, ${user.address.city} (zipcode: ${user.address.zipcode})</a></li>
                                <li><strong>Website:</strong> <a href="${user.website}" target="_blank">${user.website}</a></li>
                                <li><strong>Work:</strong> ${user.company.name}</li>
                                </ul>
                                
                                
                                `
                                searchResult.append(userItem)
                           
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(res => res.json())
        .then(posts => {
            posts.map (post => {
                
        if(user.username.includes(searchValue) || user.name.includes(searchValue) || user.email.includes(searchValue) || post.title.includes(searchValue)) {
           userItem.style.display = 'block';
         
           
        } else {
           
            userItem.style.display = 'none';
        }
    })
})
       
    searchResult.append(userItem)
    })
  })



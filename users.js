fetch(`https://jsonplaceholder.typicode.com/users`)
.then(res=>res.json())
.then(users => {
    let usersWrapper = document.getElementById('user-post-wrapper')
    usersWrapper.innerHTML = '<h1>Site Users: </h1>'
    users.map(user => {
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(res=>res.json())
        .then(posts => {
            let count = 0
            for(let prop in posts) {
                if(posts.hasOwnProperty(prop))
                count++
            }
                
        
        let userElement = document.createElement('div')
        userElement.innerHTML = `<h2><a href="./user.html?user_id=${user.id}">${user.name}</a></h2>
                                 <h3>Number of posts:${count} </h3>   `
           
        usersWrapper.append(userElement)
    
    })
})
})

// 8. Sukurti vartotojų puslapį (users.html), kuriame būtų atvaizduotas vartotojų sąrašas.
//   8.1. Prie vartotojo turėtu būti jo vardas ir parašytų post'ų skaičius.
//   8.2. Paspaudus ant vartotojo - nukreipiama į jo puslapį.
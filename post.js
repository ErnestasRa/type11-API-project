let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams);
let userId = urlParams.get('user_id');



fetch(`https://jsonplaceholder.typicode.com/posts/?_limit=15`)
  .then(res => res.json())
  .then(posts => {
    let postsWrapper = document.getElementById('posts-wrapper')
    postsWrapper.innerHTML = `<h1>User Posts:</h1>`
    
    posts.map(post => {
      console.log(post)
      fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}/`)
      .then(res=>res.json())
      .then(users => {
      let userPosts = document.createElement('div')
      fetch(`https://jsonplaceholder.typicode.com/comments/${post.id}`)
      .then(res =>res.json())
      .then(comments => {
        
     



      userPosts.classList.add('user-posts')
      userPosts.innerHTML = `<h3>${post.title}</h3>
                            <h2><a href="./user.html?user_id=${users.id}">${users.name}</a></h2>         
                            <h4>${post.body}</h4> 
                            <p>${comments.body}</p>
                            <h5><a href="./post.html?user_id=${users.id}">Other posts</a></h5>
                            `
                            console.log(users.id)
      postsWrapper.append(userPosts)
    })
  })
  })

})
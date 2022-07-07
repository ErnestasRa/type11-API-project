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
        userItem.innerHTML = `<h2><a href="./user.html?user_id=${user.id}">${user.name}</a> (${user.username})</h2>
                                <ul>
                                <li><strong>Email:</strong> <a href="mailto:${user.email}">${user.email}</a></li>
                                <li><strong>Phone:</strong> <a href="tel:${user.phone}">${user.phone}</a></li>
                                <li><strong>Address:</strong> <a href="#">${user.address.street} ${user.address.suite}, ${user.address.city} (zipcode: ${user.address.zipcode})</a></li>
                                <li><strong>Website:</strong> <a href="${user.website}" target="_blank">${user.website}</a></li>
                                <li><strong>Work:</strong> ${user.company.name}</li>
                                </ul>`
                                searchResult.append(userItem)
                           
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts?_limit=20`)
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
//           if (studentSurname.includes(searchInput)) {
//             student.style.display = 'block';
//           } else {
//             student.style.display = 'none';
//           }
       
    searchResult.append(userItem)
    })
  })


//   // 2. Šiam kintamąjam pridėti event listener'į - jo tipas submit.
// searchForm.addEventListener('submit', (event) => {
//     event.preventDefault();
    
//     // 3. Submit metu, išsaugoti duomenis, kurie įvesti paieškos formoje (text input'e).
//     let searchInput = event.target.elements.search.value.toLowerCase().trim();
  
//     let searchVariation = event.target.elements.variations.value;
//     console.log(searchVariation);
    
//     // 4. Selektinti visus studentų elementus, jis pridedam į kintamąjį.
//     let allStudents = document.querySelectorAll('.student-item');
    
//     // 5. Leisti ciklą per studentų masyvą ir kiekvieno ciklo metu:
//     allStudents.forEach(student => {
    //   // 5.1. Paselektinti studento vardą.
    //   let studentName = student.querySelector('.student-name').textContent.toLowerCase();
//       // 5.2. Paselektinti studento pavardę.
//       let studentSurname = student.querySelector('.student-surname').textContent.toLowerCase();
//       let studentAge = student.querySelector('.student-age').textContent;
//       let studentItKnowledge = student.querySelector('.student-it-knowledge').textContent;
//       let studentGroup = student.querySelector('.student-group').textContent.toLowerCase();
  
//       console.log(searchInput);
  
    //   switch (searchVariation) {
    //     case 'name':
  
    //         // 5.3. Patikrinti ar varde arba pavardėje yra ieškoma frazė.
    //       if (studentName.includes(searchInput)) {
    //         // 5.3.2. Jeigu yra, tai reikia parodyti studento elementą (display: block).
    //         student.style.display = 'block';
    //       } else {
    //         // 5.3.1. Jeigu nėra, tai reikia paslėpti studento elementą (display: none).
    //         student.style.display = 'none';
    //       }
  
    //       break;
//         case 'surname':
          
//           if (studentSurname.includes(searchInput)) {
//             student.style.display = 'block';
//           } else {
//             student.style.display = 'none';
//           }
  
//           break;
//         case 'age':
  
//           if (studentAge === searchInput) {
//             student.style.display = 'block';
//           } else {
//             student.style.display = 'none';
//           }
  
//           break;
//         case 'it-knowledge':
  
//           if (studentItKnowledge === searchInput) {
//             student.style.display = 'block';
//           } else {
//             student.style.display = 'none';
//           }
  
//           break;
//         case 'group':
  
//           if (studentGroup.includes(searchInput)) {
//             student.style.display = 'block';
//           } else {
//             student.style.display = 'none';
//           }
  
//           break;
//         default:
//           console.error('Netinkamas');
//       }
  
  
//     })
//   });
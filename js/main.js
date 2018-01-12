// Initial variables
const url = 'https://randomuser.me/api/?results=16';
const list = document.getElementById('users');

// Helper functions

// Create element that is passed into parameters
function createElement (element) {
  return document.createElement(element);
}

// Append second parameter to the first one
function append (parent, element) {
  return parent.appendChild(element);
}

fetch(url)
  .then((response) => response.json())
  .then(function (data) {
    let users = data.results;
    return users.map(function (user) {
      let li = createElement('li');
      let img = createElement('img');
      let span = createElement('span');
      
      img.src = user.picture.medium;
      span.textContent = `${user.name.first} ${user.name.last}`;
      append(li, img);
      append(li, span);
      append(list, li);
    })
  })

  .catch(function(error) {
    // If there is any error you will catch them here
  });   
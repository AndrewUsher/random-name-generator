// Initial variables
const url = 'https://randomuser.me/api/?results=32'
const list = document.getElementById('users')

// Create element(s) that is passed into parameters
const createElement = (...elements) => {
  const createdElements = []
  elements.map(element => createdElements.push(document.createElement(element)))
  return createdElements
}

// Append second parameter to the first one
const append = (parent, element) => parent.appendChild(element)

fetch(url)
  .then(response => response.json())
  .then(data => {
    let users = data.results
    return users.map(user => {
      const [li, img, span] = createElement('li', 'img', 'span')
      img.src = user.picture.medium
      span.textContent = [user.name.first, user.name.last].join(' ')
      append(li, img)
      append(li, span)
      append(list, li)
    })
  })
  .catch(function(error) {
    console.error(error)
  })

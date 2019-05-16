const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false
// Makes a container, which is where the future code will be inserted
const container = document.querySelector('#toy-collection')

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
  } else {
    toyForm.style.display = 'none'
  }
})

// This is the first or highest level code that will be run, it
// It calls on the localhost/toys site and gets a response and then
// Parses it into human readable data
function getToys () {
  fetch("http://localhost:3000/toys")
  .then(resp => resp.json())
  .then(data => addToys(data))
}

// This function adds a singular toy. Create's a 'card' which is a parent div
// The children are further tags which interpolate the keys of the toy passed
// To it, from addToys. It's then appended/ joined to the container
function addAToy(toy) {
  const card = document.createElement('div')
  card.className = 'card'

  card.innerHTML = `
  <h2>${toy.name}</h2>
  <img class="toy-avatar" src=${toy.image}>
  <p> ${toy.likes} likes </p>
  <button class='like-btn'>Like <3</button>  
  `
  container.append(card)
}

// Calls each toy in from the base URL and passes it through addAToy
function addToys(toys) {
  toys.forEach(toy => addAToy(toy) )
}

getToys()


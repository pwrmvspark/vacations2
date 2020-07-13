// let form = document.getElementById("form-section");

// load = form.onload;
// function load(e) {
// e.preventDefault()
// }

let formDiv = document.getElementById("form-section")
let wishListHeading = document.getElementById("wish-list-heading")

// gather input data from form
let destinationInput = document.getElementById("destinationInput");
let locationInput = document.getElementById("locationInput");
let imageInput = document.getElementById("imageInput");
let descriptionInput = document.getElementById("descriptionInput");

// declare form section to append card to
let inputDiv = document.getElementById("form-section")

// creation of new card, when button is clicked
function createCard(destinationInput, locationInput, imageInput, descriptionInput) {


  // create div to append cards to
  let wishListDiv = document.createElement("div");
  wishListHeading.appendChild(wishListDiv)

  // create newCard div, assign ID, append to wishList div
  let newCard = document.createElement("div");
  newCard.id = "newCard";
  wishListHeading.appendChild(newCard)

  // create image element
  let img = document.createElement("img");
  img.setAttribute("class", "card-img-top");

  // newCard.class = "card-body"
  if (imageInput.value.length === 0) {
    img.src = "https://i.insider.com/5db20c3a045a3166193aae32?width=884&format=jpeg";
  } else {
    img.src = imageInput.value;
  }

  newCard.appendChild(img)

  // declare card title, then append
  let cardTitle = document.createElement("h3")
  if (destinationInput.value.length === 0) {
    cardTitle.innerText = "YEEZY"
  } else {
    cardTitle.innerHTML = destinationInput.value;
  }

  newCard.appendChild(cardTitle)

  // declare card location heading, then append
  let locationHeading = document.createElement("h4")
  if (locationInput.value.length === 0) {
    locationHeading.innerText = "KANYE THE GOD"
  } else {
    locationHeading.innerText = locationInput.value;
  }

  newCard.appendChild(locationHeading)

  // declare description summary, then append
  let cardDescription = document.createElement("p");
  if (descriptionInput.value.length === 0) {
    fetch("https://api.kanye.rest")
      .then(response => response.json())
      .then(data => {
        cardDescription.innerText = data.quote
      });
  } else {
    cardDescription.innerText = descriptionInput.value;
  }
  newCard.appendChild(cardDescription)

  // create card "remove" button
  let removeBtn = document.createElement("button");
  removeBtn.id = "remove-btn"
  removeBtn.setAttribute("class", "btn btn-primary");
  removeBtn.innerHTML = "remove";
  newCard.append(removeBtn)
  removeBtn.addEventListener("click", e => {
    e.preventDefault();
    e.target.closest("div").remove()
  })

  // create card "edit" button
  let editBtn = document.createElement("button");
  editBtn.id = "edit-btn"
  editBtn.setAttribute("class", "btn btn-primary");
  editBtn.innerText = "edit";
  newCard.append(editBtn)
  editBtn.addEventListener("click", e => {
    e.preventDefault();
    let promptDestination = window.prompt("Enter the name of Destination")
    // e.target.closest("div").setAttribute
    let promptLocation = window.prompt("Enter the location")
    let promptImg = window.prompt("Enter a image URL")
    let promptDesc = window.prompt("Write a short description")
    createCard(promptDestination, promptLocation, promptImg, promptDesc);
  })
}

// card edit button
function editCard() {

}

// change wishList heading when button clicked
function wishListFunc() {
  wishListHeading.innerText = "My WishList"
}

// grab HTML button
let addBtn = document.getElementById("add-btn");

// add click event listener, execute creation of new card
addBtn.addEventListener("click", e => {
  e.preventDefault();
  createCard(destinationInput, locationInput, imageInput, descriptionInput);
  // wishListFunc();
})

// TODO
// - input.value is not returning anything... cannot use it to modify card
// - emtpy/clear input fields onclick
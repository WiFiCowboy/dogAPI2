"use strict";

let dogValue = 0;

function getDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random/" + dogValue)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => console.log("Something went wrong. Try again later."));
}

function displayResults(responseJson) {
  resetResults();
  for(let key in responseJson.message){
    $('.results').append(
      `<img src="${responseJson.message[key]}" class="results-img">`
    )
  }
  $('.results').removeClass('hidden');
}

function watchGetForm() {
  $("#getDogs").submit(event => {
    event.preventDefault();
    dogValue = $(".howManyDogs").val();
    getDogImage();
  });
}

function resetResults(){
  $('.results').empty();
};

function DogAppController() {
  console.log("Script Ready!");
  watchGetForm();

}

$(DogAppController);

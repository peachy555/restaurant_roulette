// Define an array to store the tags and restaurants
var tags = [];
var restaurants = [];

function startRoulette() {
  var selectedTags = Array.from(document.getElementById("tags").selectedOptions, option => option.value);

  // Filter the restaurants based on the selected tags
  var filteredRestaurants = restaurants.filter(function (restaurant) {
    return selectedTags.every(function (tag) {
      return restaurant.tags.includes(tag);
    });
  });

  // Randomly select a restaurant from the filtered list
  var selectedRestaurant = filteredRestaurants[Math.floor(Math.random() * filteredRestaurants.length)];

  // Display the selected restaurant
  alert("Selected Restaurant: " + selectedRestaurant.name);
}

function addRestaurant() {
  var newRestaurant = document.getElementById("newRestaurant").value;

  // Add the new restaurant to the array
  restaurants.push({
    name: newRestaurant,
    tags: []
  });

  // Clear the input field
  document.getElementById("newRestaurant").value = "";

  // Update the dropdown with existing restaurants
  populateExistingRestaurantDropdown();
}

function addTag() {
  var newTag = document.getElementById("newTag").value;

  // Add the new tag to the array
  tags.push(newTag);

  // Clear the input field
  document.getElementById("newTag").value = "";

  // Update the dropdown with tags
  populateTagDropdown();
}

function tagRestaurant() {
  var selectedRestaurantIndex = document.getElementById("existingRestaurant").selectedIndex;
  var selectedTag = document.getElementById("existingTag").value;

  // Associate the selected tag with the selected restaurant
  restaurants[selectedRestaurantIndex].tags.push(selectedTag);
}

function deleteRestaurant() {
  var selectedRestaurantIndex = document.getElementById("existingRestaurant").selectedIndex;

  // Remove the selected restaurant from the array
  restaurants.splice(selectedRestaurantIndex, 1);

  // Update the dropdown with existing restaurants
  populateExistingRestaurantDropdown();
}

function populateTagDropdown() {
  var tagDropdown = document.getElementById("tags");

  // Clear the dropdown options
  tagDropdown.innerHTML = "";

  // Add the tags as options in the dropdown
  tags.forEach(function (tag) {
    var option = document.createElement("option");
    option.text = tag;
    tagDropdown.add(option);
  });
}

function populateExistingRestaurantDropdown() {
  var restaurantDropdown = document.getElementById("existingRestaurant");

  // Clear the dropdown options
  restaurantDropdown.innerHTML = "";

  // Add the existing restaurants as options in the dropdown
  restaurants.forEach(function (restaurant) {
    var option = document.createElement("option");
    option.text = restaurant.name;
    restaurantDropdown.add(option);
  });
}

// Initial setup: populate dropdowns
populateTagDropdown();
populateExistingRestaurantDropdown();

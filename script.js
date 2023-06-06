// Array to store the list of restaurants
var restaurants = [];

// Array to store the list of tags
var tags = [];

// Function to start the roulette
function startRoulette() {
  // Get the selected tag from the dropdown
  var selectedTag = document.getElementById("tagDropdown").value;

  // Filter the restaurants based on the selected tag
  var filteredRestaurants = restaurants.filter(function (restaurant) {
    return restaurant.tags.includes(selectedTag);
  });

  // Randomly select a restaurant from the filtered list
  var randomIndex = Math.floor(Math.random() * filteredRestaurants.length);
  var selectedRestaurant = filteredRestaurants[randomIndex];

  // Display the selected restaurant
  document.getElementById("restaurant").textContent = selectedRestaurant.name;
}

// Function to add a new restaurant
function addNewRestaurant() {
  var newRestaurantName = document.getElementById("newRestaurantInput").value;
  restaurants.push({ name: newRestaurantName, tags: [] });
  populateDropdowns();
  populateRestaurantTable();
  document.getElementById("newRestaurantInput").value = "";
}

// Function to add a new tag
function addNewTag() {
  var newTagName = document.getElementById("newTagInput").value;
  tags.push(newTagName);
  populateDropdowns();
  populateTagTable();
  document.getElementById("newTagInput").value = "";
}

// Function to tag an existing restaurant with an existing tag
function tagRestaurant() {
  var selectedRestaurantIndex = document.getElementById("existingRestaurantDropdown").selectedIndex;
  var selectedTagIndex = document.getElementById("existingTagDropdown").selectedIndex;

  if (selectedRestaurantIndex >= 0 && selectedTagIndex >= 0) {
    var selectedRestaurant = restaurants[selectedRestaurantIndex];
    var selectedTag = tags[selectedTagIndex];
    selectedRestaurant.tags.push(selectedTag);
    populateRestaurantTable();
  }
}

// Function to delete a restaurant
function deleteRestaurant() {
  var selectedRestaurantIndex = document.getElementById("deleteRestaurantDropdown").selectedIndex;

  if (selectedRestaurantIndex >= 0) {
    restaurants.splice(selectedRestaurantIndex, 1);
    populateDropdowns();
    populateRestaurantTable();
  }
}

// Function to populate the dropdowns and tables
function populateDropdowns() {
  var tagDropdown = document.getElementById("tagDropdown");
  var existingRestaurantDropdown = document.getElementById("existingRestaurantDropdown");
  var existingTagDropdown = document.getElementById("existingTagDropdown");
  var deleteRestaurantDropdown = document.getElementById("deleteRestaurantDropdown");

  // Clear dropdowns
  tagDropdown.innerHTML = "";
  existingRestaurantDropdown.innerHTML = "";
  existingTagDropdown.innerHTML = "";
  deleteRestaurantDropdown.innerHTML = "";

  // Populate dropdowns
  tags.forEach(function (tag) {
    var option = document.createElement("option");
    option.text = tag;
    tagDropdown.add(option);

    option = document.createElement("option");
    option.text = tag;
    existingTagDropdown.add(option);
  });

  restaurants.forEach(function (restaurant) {
    var option = document.createElement("option");
    option.text = restaurant.name;
    existingRestaurantDropdown.add(option);

    option = document.createElement("option");
    option.text = restaurant.name;
    deleteRestaurantDropdown.add(option);
  });
}

// Function to populate the restaurant table
function populateRestaurantTable() {
  var restaurantTableBody = document.getElementById("restaurantTableBody");
  restaurantTableBody.innerHTML = "";

  restaurants.forEach(function (restaurant) {
    var row = document.createElement("tr");

    var nameCell = document.createElement("td");
    nameCell.textContent = restaurant.name;
    row.appendChild(nameCell);

    var tagsCell = document.createElement("td");
    tagsCell.textContent = restaurant.tags.join(", ");
    row.appendChild(tagsCell);

    restaurantTableBody.appendChild(row);
  });
}

// Function to populate the tag table
function populateTagTable() {
  var tagTableBody = document.getElementById("tagTableBody");
  tagTableBody.innerHTML = "";

  tags.forEach(function (tag) {
    var row = document.createElement("tr");

    var tagCell = document.createElement("td");
    tagCell.textContent = tag;
    row.appendChild(tagCell);

    tagTableBody.appendChild(row);
  });
}

// Populate the initial dropdowns and tables
populateDropdowns();
populateRestaurantTable();
populateTagTable();

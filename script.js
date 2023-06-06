// Assuming you have a list of restaurants and tags
var restaurants = [
  { name: "Restaurant 1", tags: ["tag1", "tag2"] },
  { name: "Restaurant 2", tags: ["tag2", "tag3"] },
  // Add more restaurants with tags
];

// Function to populate the tag dropdown on the main page
function populateTagDropdown() {
  var tagDropdown = document.getElementById("tagDropdown");
  tagDropdown.innerHTML = "<option value='all'>All</option>"; // Option to select all restaurants
  var allTags = [];

  restaurants.forEach(function (restaurant) {
    restaurant.tags.forEach(function (tag) {
      if (!allTags.includes(tag)) {
        allTags.push(tag);
        var option = document.createElement("option");
        option.value = tag;
        option.text = tag;
        tagDropdown.appendChild(option);
      }
    });
  });
}

// Function to start the roulette and select a restaurant
function startRoulette() {
  var tagDropdown = document.getElementById("tagDropdown");
  var selectedTag = tagDropdown.value;

  // Filter restaurants based on the selected tag
  var filteredRestaurants = restaurants.filter(function (restaurant) {
    return selectedTag === "all" || restaurant.tags.includes(selectedTag);
  });

  // Randomly select a restaurant from the filtered list
  var selectedRestaurant =
    filteredRestaurants[Math.floor(Math.random() * filteredRestaurants.length)];

  // Display the selected restaurant name
  alert("Selected Restaurant: " + selectedRestaurant.name);
}

// Call the populateTagDropdown function when the page loads
window.onload = populateTagDropdown;

// Define a list of restaurants with associated tags
const restaurants = [
  { name: "Restaurant A", tags: ["Italian", "Vegetarian"] },
  { name: "Restaurant B", tags: ["Asian"] },
  { name: "Restaurant C", tags: ["Italian"] },
  // Add more restaurants with tags as needed
];

// Function to populate the table with restaurants and tags
function populateTable() {
  const tableBody = document.querySelector("#restaurantTable tbody");
  tableBody.innerHTML = "";

  restaurants.forEach((restaurant) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const tagsCell = document.createElement("td");

    nameCell.textContent = restaurant.name;
    tagsCell.textContent = restaurant.tags.join(", ");

    row.appendChild(nameCell);
    row.appendChild(tagsCell);
    tableBody.appendChild(row);
  });
}

// Function to filter restaurants based on selected tag
function filterRestaurantsByTag(tag) {
  return tag
    ? restaurants.filter((restaurant) => restaurant.tags.includes(tag))
    : restaurants;
}

// Function to select a random restaurant and display the result
function startRoulette() {
  const tagDropdown = document.querySelector("#tagDropdown");
  const selectedTag = tagDropdown.value;
  const filteredRestaurants = filterRestaurantsByTag(selectedTag);

  if (filteredRestaurants.length === 0) {
    alert("No restaurants found with the selected tag!");
    return;
  }

  const randomIndex = Math.floor(Math.random() * filteredRestaurants.length);
  const selectedRestaurant = filteredRestaurants[randomIndex];

  alert(`Selected restaurant: ${selectedRestaurant.name}`);
}

// Initial setup
populateTable();

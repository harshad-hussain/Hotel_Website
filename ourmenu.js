let foodItems = [];


async function fetchFoodItems() {
  try {
    const response = await fetch("foodItems.json");
    if (!response.ok) {
      throw new Error("Netwrok response was not ok");
    }

    foodItems = await response.json();
    console.log(foodItems);
        populateMenu(foodItems);
         
        createMenu(item);

  } catch (error) {
    console.log("Error fetching food items", error);
  }
}


function populateMenu(foodItems) {
  const categories = {
    'bestSellers': [],
    'trending': [],
    'starter':[],
    'beverages': [],
    'main-course': [],
  };

  foodItems.forEach(item => {
    if (item.best_seller === "yes") {
      categories['bestSellers'].push(item);
    }

    if (item.trending === "yes") {
      categories['trending'].push(item);
    }

    let cat = item.category.toLowerCase().replace(" ","-");

     categories[cat].push(item);

  });

  for(const category in categories){
    const categoryContainer = document.getElementById(category);
    console.log(categoryContainer);

    const innerHTML = categories[category].map(item => createMenu(item)).join("");

    categoryContainer.querySelector(".ourmenu-items").innerHTML= innerHTML;
  }

   
}

fetchFoodItems();


function createMenu(item){

    const html =` <div class="ourmenu-card">
            <img
              src="${item.imageurl}"
              alt="${item.title}"
            />
            <div class="menu-card-content">
              <h4>${item.title}</h4>
              <p>${item.description}</p>
              <span
                >Price: <strike class="strike-price">$${item.selling_price}</strike> $${item.actual_price}</span
              >
            </div>
            <div class="add-to-cart-btn">
              <button class="cta-button">Add to Cart</button>
            </div>
          </div>
`;

return html;
}


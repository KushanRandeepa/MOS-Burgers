const burgerArray = [
  { code: 'B1001', name: 'Classic Burger (Large)', price: 750, image: 'img/Classic Burger .jpg' },
  { code: 'B1002', name: 'Classic Burger (Regular)', price: 1500, discount: 15, image: 'img/Classic Burger .jpg' },
  { code: 'B1003', name: 'Turkey Burger', price: 1600, image: 'img/Turkey Burger.jpg' },
  { code: 'B1004', name: 'Chicken Burger (Large)', price: 1400, image: 'img/Chicken Burge.jpg' },
  { code: 'B1005', name: 'Chicken Burger (Regular) ', price: 800, discount: 20, image: 'img/Chicken Burge.jpg' },
  { code: 'B1006', name: 'Cheese Burger (Large) ', price: 1000, image: 'img/Classic Burger .jpg' },
  { code: 'B1007', name: 'Cheese Burger (Regular)', price: 600, discount: 10, image: 'img/Classic Burger .jpg' },
  { code: 'B1008', name: 'Bacon Burger ', price: 650, discount: 15, image: 'img/Bacon Burger.jpg' },
  { code: 'B1009', name: 'Shawarma Burger ', price: 800, image: 'img/9 Shawarma Burger.png' },
  { code: 'B1010', name: 'Olive Burger', price: 1800, image: 'img/Olive Burger.jpg' },
  { code: 'B1011', name: 'Double-Cheese Burger ', price: 1250, discount: 20, image: 'img/Double-Cheese Burger.jpg' },
  { code: 'B1013', name: 'Crispy Chicken Burger (Regular) ', price: 1900, image: 'img/crichi.jpg' },
  { code: 'B1014', name: 'Crispy Chicken Burger (Large) ', price: 1900, image: 'img/crichi.jpg' },
  { code: 'B1015', name: 'Paneer Burger', price: 1900, discount: 10, image: 'img/5 Paneer Burger.jpg' },
];

const submarineArray = [
  { code: 'B116', name: 'Crispy Chicken Submarine (Large) ', price: 2000, image: 'img/Crispy Chicken Submarine.jpg' },
  { code: 'B1017', name: 'Crispy Chicken Submarine (Regular) ', price: 1500, image: 'img/Crispy Chicken Submarine.jpg' },
  { code: 'B1018', name: 'Chicken Submarine (Large)', price: 1800, discount: 3, image: 'img/Chicken Submarine.jpg' },
  { code: 'B1019', name: 'Chicken Submarine (Regular) ', price: 1400, image: 'img/Chicken Submarine.jpg' },
  { code: 'B1020', name: 'Grinder Submarine ', price: 2300, image: 'img/Grinder Submarin.jpg' },
  { code: 'B1021', name: 'Cheese Submarine ', price: 2200, image: 'img/Cheese Submarine.jpg' },
  { code: 'B1022', name: 'Double Cheese n Chicken Submarine', price: 1900, discount: 16, image: 'img/ouble Cheese n Chicken Submarine.jpg' },
  { code: 'B1023', name: 'Special Horgie Submarine ', price: 2800, image: 'img/pecial Horgie Submarine.jpg' },
  { code: 'B1024', name: 'MOS Special Submarine ', price: 3000, image: 'img/OS Special Submarin.jpg' },
];

const friesArray = [
  { code: 'B1025', name: 'Steak Fries (Large) ', price: 1200, image: 'img/Steak Fries 2.jpg' },
  { code: 'B1026', name: 'Steak Fries (Medium)', price: 600, image: 'img/Steak Fries 2.jpg' },
  { code: 'B1027', name: 'French Fries (Large) ', price: 800, image: 'img/French-Fries-.jpg' },
  { code: 'B1028', name: 'French Fries (Medium', price: 650, image: 'img/French-Fries-.jpg' },
  { code: 'B1029', name: 'French Fries (Small) ', price: 450, image: 'img/French-Fries-.jpg' },
  { code: 'B1030', name: 'Sweet Potato Fries (Large) ', price: 600, image: 'img/baked-sweet-potato-fries-12.jpg' },
];
const pastaArray = [
  { code: 'B1031', name: 'Chicken n Cheese Pasta ', price: 1600, discount: 15, image: 'img/download (2).jpeg' },
  { code: 'B1032', name: 'Chicken Penne Pasta ', price: 1700, image: 'img/download (1).jpeg' },
  { code: 'B1033', name: 'Ground Turkey Pasta Bake ', price: 2900, discount: 10, image: 'img/download (3).jpeg' },
  { code: 'B1034', name: 'Creamy Shrimp Pasta ', price: 2000, image: 'img/images.jpeg' },
  { code: 'B1035', name: 'Lemon Butter Pasta ', price: 1950, image: 'img/download (5).jpeg' },
  { code: 'B1036', name: 'Tagliatelle Pasta ', price: 2400, discount: 1, image: 'img/download (4).jpeg' },
  { code: 'B1037', name: 'Baked Ravioli ', price: 2000, discount: 1, image: 'img/download.jpeg' },

];

const chickenArray = [
  { code: 'B1038', name: 'Fried Chicken (Small) ', price: 1200, image: 'img/fried chicken.jpeg' },
  { code: 'B1039', name: 'Fried Chicken (Regular) ', price: 2300, discount: 10, image: 'img/fried chicken.jpeg' },
  { code: 'B1040', name: 'Fried Chicken (Large) ', price: 3100, discount: 5, image: 'img/fried chicken.jpeg' },
  { code: 'B1041', name: 'Hot Wings (Large)', price: 2400, image: 'img/chik.jpeg' },
  { code: 'B1042', name: 'Devilled Chicken (Large) ', price: 900, image: 'img/deval chicken.jpeg' },
  { code: 'B1043', name: 'BBQ Chicken (Regular) ', price: 2100, image: 'img/bbq.jpeg' },


];

const beveragesArray = [
  { code: 'B1044', name: 'Pepsi (330ml) ', price: 990, discount: 5, image: 'img/pepsi.jpeg' },
  { code: 'B1045', name: 'Coca-Cola (330ml) ', price: 1230, image: 'img/coca.jpeg' },
  { code: 'B1046', name: 'Sprite (330ml) ', price: 1500, discount: 3, image: 'img/sprite.jpeg' },
  { code: 'B1047', name: 'Mirinda (330ml)', price: 850, discount: 7, image: 'img/mirinda.jpeg' },
];

function btnBurgers(id){
  console.log(id)
  arrayLoadToCard(burgerArray,id);
}
function btnSubmarine(id) {
  arrayLoadToCard(submarineArray);
 }
function btnpasta(id) { 
  arrayLoadToCard(pastaArray);
}
function btnFries(id) {
  arrayLoadToCard(friesArray);
 }
function btnChicken(id) { 
  arrayLoadToCard(chickenArray);
}
function btnBeverages(id) { 
  arrayLoadToCard(beveragesArray);
}

function arrayLoadToCard( Array,id) {
  
  const container = document.getElementById("itemsContainer");
  container.innerHTML = "";
  const row = document.createElement("div");
  row.className = "row ";

  Array.forEach((item, index) => {
    const col = document.createElement("div");
    col.className = "col-12 col-md-6 col-lg-3";

    col.innerHTML = `
          <div class="card h-100 ">
              <img src="${item.image}" class="card-img-top img-fluid" alt="${item.name}"
                 style="width: 100%; height: 150px; object-fit: cover;">
              <div class="card-body h-25">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.code}</p>
                <p class="card-text">LKR:${item.price}</p>
                ${item.discount ? `<p>Discount: ${item.discount}%</p>` : ''}
              </div>
              <div class="card-footer d-flex justify-content-evenly mb-2">
              ${id < 10 ? `
                <a href="#" class="btn btn-sm btn-primary">Update</a>
                <a href="#" class="btn btn-sm btn-danger">Delete</a>
              ` : `
                <a href="#" class="btn btn-sm btn-primary">Add</a>
              `}
              
              </div>
          </div>
      `;

    row.appendChild(col);
  });

  container.appendChild(row);
}

function btnAddItem() { }





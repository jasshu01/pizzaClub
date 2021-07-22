indexValue = 2;
let combos = [
    {
        index: 2,
        comboName: [
            "Veg. Onion Pizza", "Capsicum Pizza", "Sweet Corn Pizza", "Tomato Pizza"
        ],
        price: "349"

    }, {
        index: 3,
        comboName: [
            "Veg. Onion & Capsicum Pizza", "Onion & Paneer Pizza", "Sweet Corn & Paneer Pizza", "Onion & Tomato Pizza"
        ],
        price: "449"

    }
]


// comboBox.innerHTML = '<h1> combo Offers </h1> <br>';
s = '';

for (i = 0; i < combos.length; i++) {


    s += `
    <div class="card my-3  grad2 store-item  combo_class">
    <div class="card-body">  
    <h1 class="card-title">Combo Pack ${i+1} </h1>
    `


    for (j = 0; j < combos[i].comboName.length; j++) {

        s += `<h5>${combos[i].comboName[j]}</h5>`
    }




    s += `<h5 class="store-item-value">Price Rs.<strong class="store-item-price-selected"
                class="font-weight-bold">${combos[i].price}</strong></h5>
        <button class="btn btn-success addToCartBtn" onclick="add_to_cart(${i+2})" id="add_to_cart_${i+2}">Add to
            Cart
    
        </button>
    </div>
    </div>
    
    `
}

specialBox.innerHTML += s;




indexValue++;
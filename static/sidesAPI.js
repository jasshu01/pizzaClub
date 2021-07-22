// let pizzaBox = document.getElementById("pizzaBox");
Product_numberValue = 4+pizzas.length;
let sides = [
    {
        index: 7,
        img: "garlicbread1.jpeg",
        sideName: "Garlic Bread",
        price: 99,
        type: "garlic_bread_class"
    }, {
        index: 8,
        img: "garlicbread2.jpeg",
        sideName: " Special Garlic Bread",
        price: 129,
        type: "garlic_bread_class"
    }, {
        index: 9,
        img: "garlicbread3.jpeg",
        sideName: "Stuffed Garlic Bread",
        price: 159,
        type: "garlic_bread_class"
    }, {
        index: 9,
        img: "burger_pizza.jpeg",
        sideName: "Burger Pizza",
        price: 89,
        type: "sides"
    },{
        index: 9,
        img: "pasta1.jpeg",
        sideName: "Red Sauce Pasta",
        price: 139,
        type: "sides"
    },{
        index: 9,
        img: "pasta2.jpeg",
        sideName: "White Sauce Pasta",
        price: 129,
        type: "sides"
    },
]



for (i = 0; i < sides.length; i++) {
    pizzaBox.innerHTML += `

    <div class="card my-3  store-item ${sides[i].type} side_class">
    <img src="static/sides/${sides[i].img}" class="card-img-top  store-img" alt="...">
    
    <div class="card-body">
        <h5 class="card-title">${sides[i].sideName} </h5>
        <h5 class="store-item-value">Price Rs.<strong class="store-item-price-selected"
                class="font-weight-bold">${sides[i].price}</strong></h5>
        <button class="btn btn-primary addToCartBtn" onclick="add_to_cart(${Product_numberValue+i})" id="add_to_cart_${Product_numberValue+i}">Add to Cart
    
        </button>
    </div>
    </div> 


`
}

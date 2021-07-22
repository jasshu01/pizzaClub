// let pizzaBox = document.getElementById("pizzaBox");
Product_numberValue = 4+pizzas.length+sides.length;
let drinks = [
    {
        index: 10,
        img: "drink4.jpeg",
        drinkName: "Monster",
        price: 109
    },{
        index: 11,
        img: "drink2.jpeg",
        drinkName: "Coca Cola",
        price: 59
    },{
        index: 12,
        img: "drink3.jpeg",
        drinkName: "Cold Coffee",
        price: 99
    }
]
for (i = 0; i < drinks.length; i++) {
    pizzaBox.innerHTML += `

    <div class="card my-3  store-item  drink_class">
    <img src="static/drinks/${drinks[i].img}" class="card-img-top store-img" alt="...">

    <div class="card-body">
        <h5 class="card-title">${drinks[i].drinkName}</h5>
        <h5 class="store-item-value">Price Rs.<strong class="store-item-price-selected"
                class="font-weight-bold">${drinks[i].price}</strong></h5>
        <button class="btn btn-primary addToCartBtn" onclick="add_to_cart(${Product_numberValue+i})" id="add_to_cart_${Product_numberValue+i}">Add to
            Cart

        </button>
    </div>
</div>


`
}

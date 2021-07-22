// let pizzaBox = document.getElementById("pizzaBox");
Product_numberValue = 4+pizzas.length+sides.length+drinks.length;
let extras = [
    {
        index:13,
        img: "cheese.jpg",
        extrasName: "Cheesy Dip",
        price: 69
    },{
        index: 14,
        img: "dip.jpg",
        extrasName: "Cheese Jalapeno Dip",
        price: 49
    },{
        index: 15,
        img: "tomato.webp",
        extrasName: "Tomato Ketchup",
        price: 1
    }
]






for (i = 0; i < extras.length; i++) {
    pizzaBox.innerHTML += `

    <div class="card my-3  store-item  extra_class">
    <img src="static/extra/${extras[i].img}" class="card-img-top store-img" alt="...">

    <div class="card-body">
        <h5 class="card-title">${extras[i].extrasName}</h5>
        <h5 class="store-item-value">Price Rs.<strong class="store-item-price-selected"
                class="font-weight-bold">${extras[i].price}</strong></h5>
        <button class="btn btn-primary addToCartBtn" onclick="add_to_cart(${Product_numberValue+i})" id="add_to_cart_${Product_numberValue+i}">Add to
            Cart
        </button>
    </div>
</div>

`
}


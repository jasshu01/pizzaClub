console.log("pizzas");
Product_numberValue = 1;
let pizzaBox = document.getElementById("pizzaBox");
let pizzas = [
    {
        Product_number: 4,
        img: "pizza1.jpeg",
        pizzaName: "Deluxe Veggie",
        regularPrice: 99,
        mediumPrice: 219,
        largePrice: 429
    }, {
        Product_number: 5,
        img: "pizza2.jpeg",
        pizzaName: "Farmhouse Pizza",
        regularPrice: 139,
        mediumPrice: 269,
        largePrice: 479
    }, {
        Product_number: 6,
        img: "pizza3.jpeg",
        pizzaName: "Margreta Pizza",
        regularPrice: 99,
        mediumPrice: 199,
        largePrice: 349
    }, {
        Product_number: 7,
        img: "pizza5.jpeg",
        pizzaName: "Peppy Panner Pizza",
        regularPrice: 199,
        mediumPrice: 389,
        largePrice: 529
    }, {
        Product_number: 8,
        img: "pizza5.jpeg",
        pizzaName: "Authentic Italian Pizza",
        regularPrice: 159,
        mediumPrice: 329,
        largePrice: 599
    }, {
        Product_number: 9,
        img: "pizza5.jpeg",
        pizzaName: "Veg. Loaded Pizza",
        regularPrice: 149,
        mediumPrice: 289,
        largePrice: 429
    }
]

for (i = 0; i < pizzas.length; i++) {
    pizzaBox.innerHTML += `

<div class="card my-3  store-item pizza_class ">
                <img src="static/pizzas/${pizzas[i].img}" class="card-img-top  store-img" alt="...">

                <div class="card-body pizza_size">
                    <h5 class="card-title pizza_class_class">${pizzas[i].pizzaName}</h5>
                    

                    <div class="btn-group" aria-label="Basic radio toggle button group">

                        <label class="btn btn-outline-primary" for="btnradio1" onclick="pizzaone(${pizzas[i].regularPrice},${i+Product_numberValue},1)"
                            id="regular1">
                            Regular ${pizzas[i].regularPrice}</label>


                        <label class="btn btn-outline-primary" for="btnradio2" onclick="pizzaone(${pizzas[i].mediumPrice},${i+Product_numberValue},2)"
                            id="medium1">Medium ${pizzas[i].mediumPrice} </label>

                        <label class="btn btn-outline-primary" for="btnradio3" onclick="pizzaone(${pizzas[i].largePrice},${i+Product_numberValue},4)"
                            id="large1">Large ${pizzas[i].largePrice} </label>
                            
                            <span class="pizza_class_size" style="display:none" ></span>
                    </div>
                    <div style="display: flex;">

                        <h5 class="store-item-value-selected mx-4"> </h5>

                        <h5>
                            <strong class="store-item-price-selected" class="font-weight-bold"></strong>
                        </h5>

                    </div>


                    <button class="btn btn-primary addToCartBtn" onclick="add_to_cart(${i+Product_numberValue})" id="add_to_cart_${i+Product_numberValue}">Add to Cart

                    </button>
                </div>
            </div>


`
}

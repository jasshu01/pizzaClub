for (i = 0; i < pizzas.length; i++) {
    pizzaBox.innerHTML += `

<div class="card my-3  store-item pizza_class ">
                <img src="static/pizzas/${pizzas[i].img}" class="card-img-top  store-img" alt="...">

                <div class="card-body pizza_size">
                    <h5 class="card-title pizza_class_class">${pizzas[i].pizzaName}</h5>


                    <div class="btn-group" aria-label="Basic radio toggle button group">

                        <label class="btn btn-outline-primary" for="btnradio1" onclick="pizzaone(${pizzas[i].regularPrice},${pizzas[i].index},1)"
                            id="regular1">
                            Regular ${pizzas[i].regularPrice}</label>


                        <label class="btn btn-outline-primary" for="btnradio2" onclick="pizzaone(${pizzas[i].mediumPrice},${pizzas[i].index},2)"
                            id="medium1">Medium ${pizzas[i].mediumPrice} </label>

                        <label class="btn btn-outline-primary" for="btnradio3" onclick="pizzaone(${pizzas[i].largePrice},${pizzas[i].index},4)"
                            id="large1">Large ${pizzas[i].largePrice} </label>
                            <span class="pizza_class_size" style="display:none" ></span>
                    </div>
                    <div style="display: flex;">

                        <h5 class="store-item-value-selected mx-4"> </h5>

                        <h5>
                            <strong class="store-item-price-selected" class="font-weight-bold"></strong>
                        </h5>

                    </div>


                    <button class="btn btn-primary addToCartBtn" onclick="add_to_cart(${pizzas[i].index})" id="add_to_cart_${pizzas[i].index}">Add to Cart

                    </button>
                </div>
            </div>


`
}

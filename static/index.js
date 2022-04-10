let pizza_class = document.getElementsByClassName("pizza_class")
let garlic_bread_class = document.getElementsByClassName("garlic_bread_class")
let pasta_class = document.getElementsByClassName("pasta_class")
let drink_class = document.getElementsByClassName("drink_class")
let extra_class = document.getElementsByClassName("extra_class")
let side_class = document.getElementsByClassName("side_class")

let only_pizzas = document.getElementById("only_pizzas");
let only_sides = document.getElementById("only_sides");
let only_drinks = document.getElementById("only_drinks");
let only_extras = document.getElementById("only_extras");
let hide_nothing = document.getElementById("hide_nothing");

localStorage.clear();

function hide_pizzas() {
    // console.log("in funtion");
    for (let i = 0; i < pizza_class.length; i++) {
        pizza_class[i].style.display = "none";
    }
}

function hide_drinks() {
    // console.log("in funtion");
    for (let i = 0; i < drink_class.length; i++) {
        drink_class[i].style.display = "none";
    }
}

function hide_sides() {
    // console.log("in funtion");
    for (let i = 0; i < side_class.length; i++) {
        side_class[i].style.display = "none";
    }
}

function hide_extra() {
    // console.log("in funtion");
    for (let i = 0; i < extra_class.length; i++) {
        extra_class[i].style.display = "none";
    }
}

function show_all() {
    for (let i = 0; i < extra_class.length; i++) {
        extra_class[i].style.display = "block";
    }
    for (let i = 0; i < side_class.length; i++) {
        side_class[i].style.display = "block";
    }
    for (let i = 0; i < drink_class.length; i++) {
        drink_class[i].style.display = "block";
    }
    for (let i = 0; i < pizza_class.length; i++) {
        pizza_class[i].style.display = "block";
    }

}


hide_nothing.addEventListener("click", function() {
    show_all();

})

only_pizzas.addEventListener("click", function() {
    show_all();
    hide_drinks();
    hide_extra();
    hide_sides();


})
only_sides.addEventListener("click", function() {

    show_all();
    hide_pizzas();
    hide_drinks();
    hide_extra();


})
only_drinks.addEventListener("click", function() {

    show_all();
    hide_pizzas();
    hide_extra();
    hide_sides();


})
only_extras.addEventListener("click", function() {

    show_all();
    hide_pizzas();
    hide_sides();
    hide_drinks();

})

show_all();
//----------------------------------------------------------------------------------------------------//



let addToCartBtn = document.getElementsByClassName("addToCartBtn");
let product_name = document.getElementsByClassName("card-title");


const cartInfo = document.getElementById('cart-info');
const cart = document.getElementById('inCart');



cartInfo.addEventListener('click', function() {
    cart.classList.toggle('show-cart');
    show_cart();
})




function add_to_cart(product_number) {
    var cartObj;
    let selectedPrice = document.getElementsByClassName("store-item-price-selected");



    let cart = localStorage.getItem("cart");
    if (cart == null) {
        cartObj = [];
    } else {
        cartObj = JSON.parse(cart);
    }


    alreadyThere = 0;



    if (selectedPrice[product_number - 1].innerHTML == ``) {
        alert("select Pizza");
        return;
    }

    pizzaSize = '';

    if (product_name[product_number - 1].classList.contains("pizza_class_class")) {
        // pizzaSize = pizza_class_size[product_number - 1].innerHTML;
        pizzaSize = document.getElementsByClassName("store-item-value-selected")[product_number - 1].innerHTML;
    }


    // console.log(pizzaSize);
    // if (new Date().getDay() == 0) {
    //     if (pizzaSize === " Medium " || pizzaSize === " Large ") {
    //         console.log("discounting");
    //         selectedPrice[product_number - 1].innerHTML = Math.round(parseInt(selectedPrice[product_number - 1].innerHTML) * 0.8)
    //     }
    // }


    for (i = 0; i < cartObj.length; i++) {



        if (product_name[product_number - 1].classList.contains("pizza_class_class")) {
            pizzaSize = document.getElementsByClassName("store-item-value-selected")[product_number - 1].innerHTML;
            if (cartObj[i].price === selectedPrice[product_number - 1].innerHTML && cartObj[i].name === product_name[product_number - 1].innerHTML) {
                incrementItem(i);
                alreadyThere++;
            }
        } else {

            if (cartObj[i].name === product_name[product_number - 1].innerHTML) {
                incrementItem(i);
                alreadyThere++;
            }
        }
    }





    if (alreadyThere == 0) {
        let myProduct = {
            name: pizzaSize + product_name[product_number - 1].innerHTML,
            price: selectedPrice[product_number - 1].innerHTML,
            qty: 1

        };
        console.log(myProduct.name)


        cartObj.push(myProduct)
        localStorage.setItem('cart', JSON.stringify(cartObj));
    }




    show_cart();
    complete_cart();
}



function complete_cart() {
    let cart = localStorage.getItem("cart");
    if (cart == null) {
        cartObj = [];
    } else {
        cartObj = JSON.parse(cart);
    }

    let bill = 0;

    for (let i = 0; i < cartObj.length; i++) {
        bill += parseInt(cartObj[i].price) * parseInt(cartObj[i].qty);
    }
}


$('.alert-success').hide();


let placeOrderSection = document.getElementById("placeOrder");
placeOrderSection.style.display = "none";



function show_cart() {

    if (localStorage.getItem("cart") == null) {
        placeOrderSection.style.display = "none";
    } else {
        placeOrderSection.style.display = "block";

    }

    let in_cart = document.getElementById("items");
    in_cart.innerHTML = ``;

    let cart = localStorage.getItem("cart");
    if (cart == null) {
        cartObj = [];
    } else {
        cartObj = JSON.parse(cart);
    }

    let bill = 0;



    for (let i = 0; i < cartObj.length; i++) {
        bill += parseInt(cartObj[i].price) * parseInt(cartObj[i].qty);
        if (cartObj[i].qty == 0) {
            delete_item_from_cart(i);
        }
        if (cartObj[i].qty > 0) {

            in_cart.innerHTML += `<div class="item-text">
            
            <p id="cart-item-title" class="font-weight-bold mb-0">${cartObj[i].name}</p>
            <span>Rs.</span>
            <span id="cart-item-price" class="cart-item-price" class="mb-0">${cartObj[i].price}</span>
            
            
            
            <button  class="btn btn-primary" onclick="decrementItem(${i})">-</button>
            <span>${cartObj[i].qty}</span>
            <button class="btn btn-primary" onclick="incrementItem(${i})" >+</button>
            
            <a id='cart-item-remove${i}'  class="cart-item-remove mx-3">
<i class="material-icons"  onclick="delete_item_from_cart(${i})">delete</i>

            
            
            </div>
            
            </a>`
        }
        // noOfItems+=cartObj[i].qty;
    }


    let finalCart = document.getElementById("finalCart");
    finalCart.innerHTML = "<h1 class='display-4'>Your Bill!</h1>"
    finalCart.innerHTML += in_cart.innerHTML;


    let total_price = document.getElementById("cart-total");
    total_price.innerHTML = ` <h5>total<sub>(inc. all taxes)</sub></h5>
    <h5> Rs. <strong id="cart-total" class="font-weight-bold item-total">${bill}</strong> </h5>`

    // // console.log(bill);

    finalCart.innerHTML += `<p class="mb-0 text-capitalize"><span >${cartObj.length} </span> items - Rs. <span
    class="item-total" >${bill}</span></p>`

    document.getElementById("item-total").innerHTML = bill;
    document.getElementById("item-count").innerHTML = cartObj.length;


    // checkOffer() ;
}

function incrementItem(i) {
    let cart = localStorage.getItem("cart");
    if (cart == null) {
        cartObj = [];
    } else {
        cartObj = JSON.parse(cart);
    }

    cartObj[i].qty++;
    localStorage.setItem("cart", JSON.stringify(cartObj))

    show_cart();
}

function decrementItem(i) {
    // console.log("increment")
    let cart = localStorage.getItem("cart");
    if (cart == null) {
        cartObj = [];
    } else {
        cartObj = JSON.parse(cart);
    }

    cartObj[i].qty--;
    localStorage.setItem("cart", JSON.stringify(cartObj))

    show_cart();
}






let clear_cart = document.getElementById("clear-cart");
clear_cart.addEventListener("click", function() {
    localStorage.clear()
    show_cart();


})

// $(alert).hide();
function delete_item_from_cart(i) {
    // console.log("delete " + i);
    let cart = localStorage.getItem("cart");
    if (cart == null) {
        cartObj = [];
    } else {
        cartObj = JSON.parse(cart);
    }

    cartObj.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cartObj))

    show_cart();
}






let adding_pizza_sizes = document.getElementsByClassName("pizza_size");
let pizza_class_size = document.getElementsByClassName("pizza_class_size");
let all_prices = document.getElementsByClassName("store-item-price");
let all_prices_selected = document.getElementsByClassName("store-item-price-selected");
let all_prices_tags = document.getElementsByClassName("store-item-value");
let all_prices_tags_selected = document.getElementsByClassName("store-item-value-selected");
let regular_pizzas = document.getElementsByClassName("regular");
let medium_pizzas = document.getElementsByClassName("medium");
let large_pizzas = document.getElementsByClassName("large");


// function size_selected(x, i, s) {
//     // console.log(x);
//     let str;
//     if (s == 1) {
//         str = "Regular "
//     }
//     if (s == 2) {
//         str = "Medium "
//     }
//     if (s == 4) {
//         str = "Large "
//     }
//     all_prices_tags_selected[i].innerHTML = str;
//     all_prices_selected[i].innerHTML = x;
//     pizza_class_size[i].innerHTML = x;
// }







function pizzaone(x, i, s) {
    console.log(x, i, s);
    let str;
    if (s == 1) {
        str = " Regular "
    }
    if (s == 2) {
        str = " Medium "
    }
    if (s == 4) {
        str = " Large "
    }

    document.getElementsByClassName("store-item-value-selected")[i - 1].innerHTML = str;
    document.getElementsByClassName("store-item-price-selected")[i - 1].innerHTML = x;
    // document.getElementsByClassName("pizza_class_size")[i - 1].innerHTML = str;
    // pizza_class_size[i - 4].innerHTML = str;



}


show_cart();
// document.getElementById("placeOrder").style.display = "none";


let checkOut_cart = document.getElementById("checkOut_cart");
checkOut_cart.addEventListener("click", function() {
    // console.log("IN Checkout")
    // document.getElementById("finalCart").style.display="block";
    document.getElementById("placeOrder").style.display = "block";
    document.getElementById("inCart").classList.remove("show-cart");

    show_cart();

    // console.log()


    // let finalCart = document.getElementById("finalCart");
    // finalCart.innerHTML += `<p class="mb-0 text-capitalize"><span >${document.getElementById("item-count").innerHTML} </span> items - Rs. <span
    // class="item-total" >${document.getElementById("item-total").innerHTML}</span></p>`

    // console.log(JSON.parse(localStorage.getItem("cart")));
    // orderObj={
    //     name:
    //     price:
    //     qty:
    // }



});

document.getElementById("order").style.display = "none";
document.getElementById("order_total").style.display = "none";
document.getElementById("datetime").style.display = "none";

// function checkOffer() {

//     let cost = parseInt(document.getElementById("item-total").innerHTML);

//     if (new Date().getDay() == 1 || new Date().getDay() == 4) {
//         if (cost > 299) {
//             for (i = 0; i < document.getElementsByClassName("item-total").length; i++) {
//                 document.getElementsByClassName("item-total")[i].innerHTML = Math.round(cost * 0.85);
//             }

//             // document.getElementById("item-total").innerHTML = Math.round(cost * 0.85);
//             // document.getElementById("item-total").innerHTML
//         }
//     }
// }


document.getElementById("Placeorderbtn").addEventListener('click', function() {



    document.getElementById("order_total").value = document.getElementById("item-total").innerHTML;



    document.getElementById("datetime").value = new Date();


    JSON.parse(localStorage.getItem("cart")).forEach(element => {

    });


    document.getElementById("order").value = (localStorage.getItem("cart"));
})

let specialBox = document.getElementById("specialOffers");
let s = '';

let indexValue = 0;



let s0 = '';
let s6 = '';




// // monday

let s1 = `
<div class="card my-3  grad store-item  special_class">
<div class="card-body" style="text-align:center;" >  
<h1>Special Of the Day</h1>
<hr>
<h1 style="margin-top: 15%;" class="card-title"> 15% Off<sub> On Total Bill</sub> </h1>
<h3>On orders Above Rs.299</sub>
<h5 style="display:none" class="store-item-value">Price Rs.<strong class="store-item-price-selected"
                class="font-weight-bold"></strong></h5>
 <button style="display:none" class="btn btn-primary addToCartBtn" onclick="add_to_cart(1)" id="add_to_cart_1">Add to
             Cart
        </button>   
</div>
</div>
`






// // tuesday

"Medium Pizza <br> <sub>(Onion, Capsicum, Corn, Tomato)</sub>",
    "Red Pasta",
    "Coke(750ml)"
let s2 = `
    <div class="card my-3  grad store-item  special_class">
    <div class="card-body"> 
    <h1 class="card-title">Special Of the Day</h1><hr>
    <h5 >
    
        <li>Medium Pizza <br> <sub>(Onion, Capsicum, Corn, Tomato)</sub></li>
        <li class="mt-2">Red Pasta</li>
        <li>Coke(750ml)</li>
   
    

</h5><h5 class="store-item-value">Price Rs.<strong class="store-item-price-selected"
                class="font-weight-bold">299</strong></h5>
        <button class="btn btn-dark addToCartBtn" onclick="add_to_cart(1)" id="add_to_cart_1">Add to
            Cart

        </button>
    </div>
    </div>

    `



s3 = `
<div class="card my-3  grad store-item  special_class">
<div class="card-body">  
<h1>Special Of the Day</h1><hr>
<h3>Buy a Large Pizza <br><sub>Get a Medium Pizza Free</h3>
<h3 id="specialOftheDay" style="display:none" class="card-title"> </h3>


<hr>
                <div class="row">

                    <span>
                        <h6>Select Large Pizza</h6>
                    </span>
                    <select name="largePizzaWednesdaySpecial" class="mx-4" id="largePizzaWednesdaySpecial"> `
s3 += `<option value="" >Select </option>`
for (i = 0; i < pizzas.length; i++) {
    s3 += `<option value="${pizzas[i].pizzaName}"> ${pizzas[i].pizzaName}</option>`
}


s3 += `
                    </select></div>

                <div class="row  mt-2">

                    <span>
                        <h6>Select Medium Pizza</h6>
                    </span>

                    <select name="mediumPizzaWednesdaySpecial" class="mx-2" id="mediumPizzaWednesdaySpecial">`
s3 += `<option value="" >Select </option>`
for (i = 0; i < pizzas.length; i++) {
    s3 += `<option value="${pizzas[i].pizzaName}">${pizzas[i].pizzaName}</option>`
}



s3 += ` </select> 
</div>



<button class="btn btn-dark" onclick="wednesdayOffer()">I Selected Pizzas </button>

<h5 id="wednesdayPrice" class="store-item-value"></h5>
 <button class="btn btn-primary addToCartBtn" onclick="add_to_cart(1)" id="add_to_cart_1">Add to
           Cart

         </button>

</div>

`




function wednesdayOffer() {

    let largePizza = document.getElementById("largePizzaWednesdaySpecial").value;
    let mediumPizza = document.getElementById("mediumPizzaWednesdaySpecial").value;

    if (largePizza == "" && mediumPizza == "") {
        alert("select Pizzas");
    }
    else {
        document.getElementById("specialOftheDay").innerHTML = `Special Of the Day(${largePizza}(L),${mediumPizza}(M) )`;

        let priceOfLarge;
        for (i = 0; i < pizzas.length; i++) {
            if (largePizza == pizzas[i].pizzaName) {
                priceOfLarge = pizzas[i].largePrice;
                console.log(priceOfLarge);
                break;

            }
        }

        document.getElementById("wednesdayPrice").innerHTML = `Price Rs.<strong class="store-item-price-selected"
class="font-weight-bold">${priceOfLarge}</strong>`

    }


}







// friday

let s5 = `   <div class="card my-3 wednesday  grad store-item  special_class">

<h5>Special Of the Day</h5>

<h5 style="display:none" class="card-title" id="specialoftheDay" ></h5>
            <h2> Buy 2 Medium Pizzas <br><sub>Get 25% Discount  </sub> </h2>

            <hr>
                <div class="row">

                    <span>
                        <h6>Select Medium Pizza 1</h6>
                    </span>
                    <select name="mediumFridaySpecial1" class="mx-4" id="mediumFridaySpecial1"> `
s5 += `<option value="" >Select </option>`
for (i = 0; i < pizzas.length; i++) {
    s5 += `<option value="${pizzas[i].pizzaName}"> ${pizzas[i].pizzaName}</option>`
}


s5 += `
                    </select></div>


                <div class="row">

                    <span>
                        <h6>Select Medium Pizza 2</h6>
                    </span>
                    <select name="mediumFridaySpecial2" class="mx-4" id="mediumFridaySpecial2">`
s5 += `<option value="" >Select </option>`


for (i = 0; i < pizzas.length; i++) {
    s5 += `<option value="${pizzas[i].pizzaName}">${pizzas[i].pizzaName}</option>`
}



s5 += ` </select> 


</div>



<button class="btn btn-dark" onclick="fridayOffer()">I Selected Pizzas </button>

<h5 class="store-item-value"> <h5 id="fridayPrice" ></h5>   <strong id="fridayPriceid" class="store-item-price-selected"
class="font-weight-bold">

   </strong>  </h5>


<button id="fridaybtn" class="btn btn-primary addToCartBtn" onclick="add_to_cart(1)" id="add_to_cart_1">Add to
            Cart

        </button>
</div>


`

// document.getElementById("fridaybtn").style.display="none";

function fridayOffer() {
    console.log(document.getElementById("mediumFridaySpecial1").value);

    console.log(document.getElementById("mediumFridaySpecial2").value);

    if (document.getElementById("mediumFridaySpecial1").value == "" && document.getElementById("mediumFridaySpecial2").value == "") {
        alert("select Pizzas");
    }
    else {



        document.getElementById("specialoftheDay").innerHTML = `Special Of the Day(${document.getElementById("mediumFridaySpecial1").value} , ${document.getElementById("mediumFridaySpecial2").value})`
        let priceFriday = 0;
        for (i = 0; i < pizzas.length; i++) {
            if (document.getElementById("mediumFridaySpecial1").value === pizzas[i].pizzaName) {
                priceFriday += parseInt(pizzas[i].mediumPrice);

                console.log(priceFriday);
                console.log(pizzas[i].index);
                // break;

            }

            if (document.getElementById("mediumFridaySpecial2").value === pizzas[i].pizzaName) {
                priceFriday += parseInt(pizzas[i].mediumPrice);
                console.log(priceFriday);

                console.log(pizzas[i].index);
                // break;

            }


        }
        console.log(priceFriday);
        priceFriday = Math.round(priceFriday * 0.75)
        console.log(priceFriday);
        document.getElementById("fridayPrice").innerHTML =


            document.getElementById("fridayPriceid").innerHTML = priceFriday;
        document.getElementById("fridayPrice").innerHTML = `Price Rs.`;
    }

}


// // SUNDAY
s0 += `
<div class="card my-3  grad store-item  special_class">
<div class="card-body" style="text-align:center;" >  
<h1>Special Of the Day</h1><hr>
<h1 style="margin-top: 15%;" class="card-title"> 20% Off <br> <sub> On Medium and Large Pizzas</sub> </h1>
<h5 style="display:none" class="store-item-value">Price Rs.<strong class="store-item-price-selected"
                class="font-weight-bold"></strong></h5>
 <button style="display:none" class="btn btn-primary addToCartBtn" onclick="add_to_cart(1)" id="add_to_cart_1">Add to
             Cart
        </button>             
</div>
</div>
`

//saturday

s6 += `
<div class="card my-3  grad store-item  special_class">
<div class="card-body">  
<h1>Special Of the Day</h1><hr>
<h3 class="card-title">Veg. Noodles & Veg. Manchurian </h3>
<h5 class="store-item-value">Price Rs.<s>260</s><strong class="store-item-price-selected"
            class="font-weight-bold">  199  </strong></h5>
    <button class="btn btn-success addToCartBtn" onclick="add_to_cart(1)" id="add_to_cart_1">Add to
        Cart
    </button>
</div>
</div>



switch (new Date().getDay()) {
    case 0:
        s = s0;
        break;
    case 1:
        s = s1;
        break;
    case 2:
        s = s2;
        break;
    case 3:
        s = s2;
        break;
    case 4:
        s = s1;
        break;
    case 5:
        s = s6;
        break;
    case 6:
        s = s6;
        break;
}



specialBox.innerHTML += s;





indexValue++;

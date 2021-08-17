let specialBox = document.getElementById("specialOffers");
let s = '';

let indexValue = 0;


let specials = [
    {
        index: indexValue++,
        specialName: [
            "Medium Pizza <br> <sub>(Onion, Capsicum, Corn, Tomato)</sub>",
            "Red Pasta",
            "Coke(750ml)"
        ],
        price: "299"

    }

]


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


let s2 = `
    <div class="card my-3  grad store-item  special_class">
    <div class="card-body"> 
    <h1>Special Of the Day</h1><hr> `;

for (j = 0; j < specials[0].specialName.length; j++) {
    s2 += `<h5 class="card-title"><li>${specials[0].specialName[j]}</li></h5>`
}


s2 += `<h5 class="store-item-value">Price Rs.<strong class="store-item-price-selected"
                class="font-weight-bold">${specials[0].price}</strong></h5>
        <button class="btn btn-dark addToCartBtn" onclick="add_to_cart(1)" id="add_to_cart_1">Add to
            Cart

        </button>
    </div>
    </div>

    `







// // wednesday

let s3 = `   <div class="card my-3 wednesday  grad store-item  special_class">
<h1>Special Of the Day<h1>
<h5 class="card-title " style="display:none" id="specialOftheDay" >Special Of the Day</h5>
<h5 style="display:none" class="card-title" id="specialoftheDay" ></h5>
           <h2> Buy a Large Pizza <br><sub>Get a Medium Pizza Free  </sub> </h2> 
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


                <div class="row">

                    <span>
                        <h6>Select Medium Pizza</h6>
                    </span>

                    <select name="mediumPizzaWednesdaySpecial" class="mx-4" id="mediumPizzaWednesdaySpecial">`
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

</div>`



function wednesdayOffer() {
    console.log(document.getElementById("largePizzaWednesdaySpecial").value);

    console.log(document.getElementById("mediumPizzaWednesdaySpecial").value);


    document.getElementById("specialOftheDay").innerHTML = `Special Of the Day(${document.getElementById("largePizzaWednesdaySpecial").value},${document.getElementById("mediumPizzaWednesdaySpecial").value} )`;

    let priceOfLarge;
    for (i = 0; i < pizzas.length; i++) {
        if (document.getElementById("largePizzaWednesdaySpecial").value == pizzas[i].pizzaName) {
            priceOfLarge = pizzas[i].largePrice;
            console.log(priceOfLarge);
            break;

        }
    }

    document.getElementById("wednesdayPrice").innerHTML = `Price Rs.<strong class="store-item-price-selected"
class="font-weight-bold">${priceOfLarge}</strong>`


}







// friday

let s4 = `   <div class="card my-3 wednesday  grad store-item  special_class">

<h5>Special Of the Day</h5>

<h5 style="display:none" class="card-title" id="specialoftheDay" ></h5>
            <h2> Buy 2 Medium Pizzas <br><sub>Get 25% Discount  </sub> </h2>

            <hr>
                <div class="row">

                    <span>
                        <h6>Select Medium Pizza 1</h6>
                    </span>
                    <select name="mediumFridaySpecial1" class="mx-4" id="mediumFridaySpecial1"> `
s4 += `<option value="" >Select </option>`
for (i = 0; i < pizzas.length; i++) {
    s4 += `<option value="${pizzas[i].pizzaName}"> ${pizzas[i].pizzaName}</option>`
}


s4 += `
                    </select></div>


                <div class="row">

                    <span>
                        <h6>Select Medium Pizza 2</h6>
                    </span>
                    <select name="mediumFridaySpecial2" class="mx-4" id="mediumFridaySpecial2">`
s4 += `<option value="" >Select </option>`


for (i = 0; i < pizzas.length; i++) {
    s4 += `<option value="${pizzas[i].pizzaName}">${pizzas[i].pizzaName}</option>`
}



s4 += ` </select> 


</div>



<button class="btn btn-dark" onclick="fridayOffer()">I Selected Pizzas </button>

<h5 class="store-item-value"> <h5 id="fridayPrice" ></h5>   <strong id="fridayPriceid" class="store-item-price-selected"
class="font-weight-bold">

   </strong>  </h5>


<button class="btn btn-primary addToCartBtn" onclick="add_to_cart(1)" id="add_to_cart_1">Add to
            Cart

        </button>
</div>


`

function fridayOffer() {
    console.log(document.getElementById("mediumFridaySpecial1").value);

    console.log(document.getElementById("mediumFridaySpecial2").value);
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
<div class="card my-3  grad store-item  combo_class">
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

`
















switch (new Date().getDay()) {
    case 0:
        s = s0;
        break;
    case 1:
        s = s1;
        break;
    case 2:
        s = s6;
        break;
    case 3:
        s = s3;
        break;
    case 4:
        s = s1;
        break;
    case 5:
        s = s4;
        break;
    case 6:
        s = s6;
        break;
}



specialBox.innerHTML += s;





indexValue++;

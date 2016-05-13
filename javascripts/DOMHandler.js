
// Variable to hold the final price. Default to 0.

var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
/*
   A <select> element broadcasts a change event, so you listen for it
   and get the value of the topping from your augmented IIFE
   */
var finalSandwichPrice = 0;
var selectedTopping;
var breadChoice = document.getElementById('menu_bread');
var cheeseChoice = document.getElementById('menu_cheese');
var meatChoice = document.getElementById('menu_meat');
var veggieChoice = document.getElementById('menu_veggies');
var goopChoice = document.getElementById('menu_condiments');
document.getElementById('order_output').innerHTML = finalSandwichPrice;``
var output = document.getElementById('order_output');

breadChoice.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  var bread = breadChoice.value;
  // Determine the price of the topping chosen
  var breadPrice = SandwichMaker.addBread(bread);
  // Add the topping to the SandwichMaker to increase the total price
  finalSandwichPrice += breadPrice;
  output.innerHTML = finalSandwichPrice.toFixed(2);
  console.log('current price', finalSandwichPrice.toFixed(2));
});

cheeseChoice.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  var cheeseSelector  = event.target;
  console.log('cheese selector', cheeseSelector);
  // Determine the price of the topping chosen
  if (cheeseSelector.checked) {
    finalSandwichPrice += SandwichMaker.addCheese(cheeseSelector.value);
    console.log('cheese value', cheeseSelector.value);
  }else{
    finalSandwichPrice -= SandwichMaker.addCheese(cheeseSelector.value);
    console.log('unselected', cheeseSelector.value);
  }
  console.log('current price', finalSandwichPrice.toFixed(2));
  output.innerHTML = finalSandwichPrice.toFixed(2);
});

meatChoice.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  var meatSelector  = event.target;
  console.log('meat selector', meatSelector);
  // Determine the price of the topping chosen
  if (meatSelector.checked) {
    finalSandwichPrice += SandwichMaker.addMeat(meatSelector.value);
  }else{
    finalSandwichPrice -= SandwichMaker.addMeat(meatSelector.value);
    console.log('unselected', meatSelector.value);
  }
  console.log('current price', finalSandwichPrice.toFixed(2));
  output.innerHTML = finalSandwichPrice.toFixed(2);
});

veggieChoice.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  var veggieSelector  = event.target;
  console.log('veggie selector', veggieSelector);
  // Determine the price of the topping chosen
  if (veggieSelector.checked) {
    finalSandwichPrice += SandwichMaker.addVeggie(veggieSelector.value);
  }else{
    finalSandwichPrice -= SandwichMaker.addVeggie(veggieSelector.value);
    console.log('unselected', veggieSelector.value);
  }
  console.log('current price', finalSandwichPrice.toFixed(2));
  output.innerHTML = finalSandwichPrice.toFixed(2);
});

goopChoice.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  var goopSelector  = event.target;
  console.log('goop selector', goopSelector);
  // Determine the price of the topping chosen
  if (goopSelector.checked) {
    finalSandwichPrice += SandwichMaker.addGoop(goopSelector.value);
  }else{
    finalSandwichPrice -= SandwichMaker.addGoop(goopSelector.value);
    console.log('unselected', goopSelector.value);
  }
  console.log('current price', finalSandwichPrice.toFixed(2));
  output.innerHTML = finalSandwichPrice.toFixed(2);
});

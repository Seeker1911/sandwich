var SandwichMaker = (function(maker) {
  var veggieTypes = {
    'lettuce': 0.50,
    'onion': 0.50,
    'tomato': 0.75
  } ;

  maker.addVeggie = function(veggieChosen){
   return  veggieTypes[veggieChosen];
    console.log('veg. chose:', veggieChosen);
    console.log('bread value', veggieTypes[veggieChosen]);
  }

 // maker.getCheeseTypes = function(){  //sets the value of cheeseTypes to be available in other functions.
   // return chesseTypes;
 // }
  return maker;
}(SandwichMaker || {}));

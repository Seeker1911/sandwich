
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  //// Private variable to store the different meat prices
  var meatTypes = {
    'turkey': 3.00,
    'bacon': 2.00,
    'tempeh': 39.60,
    'spam': 0.50
  };

  //// Augment the original object with another method
  maker.addMeat = function(meatChosen) {
    return meatTypes[meatChosen];
  };

  maker.getMeatTypes = function () {
   return meatTypes;
  }

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});

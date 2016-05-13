var SandwichMaker = (function(maker) {
  var cheeseTypes = {
    'american': 0.50,
    'swiss': 0.75,
    'provolone': 0.50,
    'pepper_jack': 1.00
  } ;

  maker.addCheese = function(cheeseChosen){
   return cheeseTypes[cheeseChosen];

  };

  maker.getCheeseTypes = function(){  //sets the value of cheeseTypes to be available in other functions.
    return cheeseTypes;
  };
  return maker;
}(SandwichMaker || {}));

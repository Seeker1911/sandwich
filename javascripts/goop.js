var SandwichMaker = (function(maker) {
  var goopTypes = {
    'mayo': 0.50,
    'mustard': 0.50,
    'relish': 0.50
  };

  maker.addGoop = function(goopChosen){
   return  goopTypes[goopChosen];
    console.log('goop chose:', goopChosen);
    console.log('goop value', goopTypes[goopChosen]);
  }

 // maker.getCheeseTypes = function(){  //sets the value of cheeseTypes to be available in other functions.
   // return chesseTypes;
 // }
  return maker;
}(SandwichMaker || {}));

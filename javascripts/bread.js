var SandwichMaker = (function(maker) {
  var breadTypes = {
    'white': 2.00,
    'wheat': 2.50,
    'pumpernickel': 2.75,
    'lettuce_wrap': 2.00,
    'rye': 8.00
  } ;

  maker.addBread = function(breadChosen){
   return  breadTypes[breadChosen];
    console.log('bread chose:', breadChosen);
    console.log('bread value', breadTypes[breadChosen]);
  }

 // maker.getCheeseTypes = function(){  //sets the value of cheeseTypes to be available in other functions.
   // return chesseTypes;
 // }
  return maker;
}(SandwichMaker || {}));

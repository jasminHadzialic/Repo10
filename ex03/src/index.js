// Only change code below this line
var myFood = {
    vegetable: "carrot",
    fruit: "orange",
    drink: "water",
  };
function myFunction(myObj) {
    var vegetable = myObj["vegetable"];
    var fruit = myObj["fruit"];
    var drink = myObj["drink"];
    return {vegetable, fruit, drink};
}

// Only change code above this line
console.log(myFunction(myFood)); // Change this line
module.exports = myFunction(myFood);
// Create lion object here
var lion = {
    name: "Simba",
    legs: 4,
    tails: 1,
  };
// End of lion object
  function myFunction(objName, objValue) { // Change this line
    // Only change code below this line
    lion[objName] = objValue;
    return lion;
    // Only change code above this line
  }
  myFunction("roar", "roar-roar"); // Change this line
  console.log(myFunction("roar", "roar-roar"));
  module.exports = myFunction;
  
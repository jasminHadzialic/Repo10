// Only change code below this line
var myPet = {
    species: "Poodle",
    name: "Bella",
    legs: 4,
    friends: ["Coco", "Charlie"],
  };
  function myFunction(myObj) {
    return myObj;
  }
  console.log(myFunction(myPet));
  module.exports = { myPet, myFunction };
  
// Only change code above this line
console.log(myFunction()); // Change this line
module.exports = { myPet, myFunction}; 

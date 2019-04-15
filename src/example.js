/*
console.log("Hello");
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");
*/

// Default Parameters
/*
const myFunc = function ( name, weather = "Raining") {
    console.log("Arguments length: " + arguments.length);
    console.log("Hello " + name);
    console.log("It is " + weather + " today.");
};*/

const myFunc = function ( name, weather, ...extraArgs) {
  console.log("Hello " + name + ".");
  console.log("It is " + weather + " today.");
  for( let i = 0; i< extraArgs.length; i = i + 1  ) {
      console.log("Extra Args: " + extraArgs[i]);
  }
};

console.log("This statement is outside the function.");

myFunc("Neoa","Sunny","one","two", "three");

myFunc("Neoa","Sunny");

myFunc("Neoa");
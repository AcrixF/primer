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

/*

const myFunc = function ( name, weather = "Cold", ...extraArgs) {
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

function myFuncR(name) {
    return ("Hello " + name + ".");
}

console.log(myFuncR("Neoa"));

*/

//console.log( myFunc( function () { return "NEOA."; }));

/*
function myFunc( nameFunction ) {
    return ("Hello " + nameFunction() + ".");
}

function printName(nameFunction, printFunction) {
    printFunction(myFunc(nameFunction));
}

printName( function(){ return "Neoa"}, console.log)

*/

const myFunc = (nameFunction) => ("Hello " +  nameFunction() + ".");

const printName = (nameFunction, printFunction) => printFunction(myFunc( nameFunction ) );

printName( () => "Neoa", console.log);


function messageFunction( name, weather ) {
    let message = "Hello Neoa";
    if ( weather === 'sunny') {
       let message = "It is a nice day";
       console.log( message );
    } else {
        let message = "It is " + weather + " today";
        console.log( message );
    }

    console.log( message );
}

messageFunction("Neoa", "raining");

/*
function messageFunctionVar( name, weather ) {
    var message = "Hello Neoa";
    if ( weather === 'sunny') {
        var message = "It is a nice day";
        console.log( message );
    } else {
        var message = "It is " + weather + " today";
        console.log( message );
    }

    console.log( message );
}
messageFunctionVar("Neoa", "raining");
*/

/*
let myArray = new Array();
myArray[0] = 100;
myArray[1] = "Neoa";
myArray[2] = true;
*/

// Array Literal
let myArray = [100,"Neoa", true];

console.log(`Index 0: ${myArray[0] }`);

myArray[0] = "Tuesday";

console.log(`Index 0: ${ myArray[0] }` );

console.log('--------- Simple For -------------');


for ( let i = 0; i < myArray.length; i = i + 1 ) {
    console.log(`Index ${i} : ${ myArray[i] }`);
}

console.log('--------- ForEach -------------');

myArray.forEach( (value, index) => console.log(`Index ${ index }: ${ value }`) );

function printItem( numValue, stringValue, boolValue ) {
    console.log(`Number: ${ numValue }`);
    console.log(`String: ${ stringValue }`);
    console.log(`Boolean: ${ boolValue }`);
}

console.log('--------- Without Spread Operator -------------');

printItem(myArray[0], myArray[1], myArray[2]);

console.log('--------- With Spread Operator -------------');

printItem(...myArray);

console.log('--------- With Spread Operator and combining arrays -------------');

let myOtherArray = [200, "Bob", false, ...myArray ];

printItem(...myOtherArray);

console.log('--------- With ForEach -------------');

myOtherArray.forEach( (value, index) => console.log(`Index ${ index } : ${ value }`));

console.log('--------- Array Methods -------------');

let products = [
    { name: "Hat", price: 24.5, stock: 10 },
    { name: "Kayak", price: 289.99, stock: 1 },
    { name: "Soccer Ball", price: 10, stock: 0 },
    { name: "Running Shoes", price: 116.50, stock: 20 }
];

console.log( products )

console.log('--------- Reduce -------------');

let totalValue = products.filter( item => item.stock > 0 )
                         .reduce( (prev, item) => prev + (item.price * item.stock), 0 );

console.log(`Total in stock: $${ totalValue }` );

console.log('--------- Join -------------');

let productNames = products.map( item => item.name ).join(',');

console.log( `All the products: ${ productNames }`);

console.log('--------- find -------------');

let findElement = products.find( item => item.price <= 30 );

console.log( findElement );

console.log('-------------------- Creating Objects ------------------------');

/*
let myData = new Object();
myData.name = "Neoa";
myData.weather = "Sunny";

console.log( myData );
*/

console.log('-------------------- Literals Objects ------------------------');

let myData_ = {
    name: "Neoa",
    weather: "Raining"
};
console.log( myData_ );

console.log('-------------------- Using variables as Object properties ------------------------');

let name = "NEOA";

let myData__ = {
    name,
    weather: "Cold",
    printMessages: function () {
        console.log(`Hello ${ myData__.name }.`);
        console.log(`Today is ${myData__.weather}.`);
    }
}

myData__.printMessages();


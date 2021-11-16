window.addEventListener("load", function () {
    console.log("Az oldal betöltődött.");
})

var myFirstString = 'Ez egy string.';
var mySecondString = "Ez is egy string.";
var mythirdString = `Ez pedig egy többsoros string.`;

var myFirstNumber = 0;
var mySecondNumber = 15;
var mythirdNumber = 6518000;

var myFirstBoolean = true;
var mySecondBoolean = false;

var myFirstArray = ["1984", "Száz év magány", "Mester és Margarita", "Homo sapiens", "39 kulcs"];

var mySecondArray = [1984, "Száz év magány", "Mester és Margarita", "Homo sapiens", "39 kulcs"];

var myFirstObject = {
    title: "Mester és Margarita",
    year: "1966",
    author: "Mikhail Bulgakov",
    translations: ["hu", "en", "de", "fr"]
};

console.log(myFirstArray[0]);
console.log(myFirstObject.title);
console.log(myFirstObject["title"]);

var a = 1;
var b = 2;
var c = a + b;
console.log(c);

function add(firstNumber, secondNumber){
   if (firstNumber > 0) {
        console.log("Az első szám nagyobb mint 0.")
   } else {
        console.log("Az első szám kisebb vagy egyenlő 0.")
   }
}

add(1, 2);

add(17948, 679);

function add(firstNumber, secondNumber){
    if (firstNumber > secondNumber) {
         console.log(firstNumber - secondNumber)
    } else {
         console.log(secondNumber - firstNumber)
    }
 }
 

function ifElseCheck (text) {
    if (text === "Hello") {
        console.log("A text az volt, hogy Hello.")
    }
    else if(text === "Hello") {
    console.log("Második if else ág.")
    }
    if (text ==="Hello") {
        console.log("Ez egy másik vizsgálat")
    }
}

ifElseCheck("Hello");

function compare(a, b) {
    console.log("==", a == b);
    console.log("===", a === b);
    var c = b + a;
    console.log(typeof c);
    console.log(c);
}

compare("1984", 1984);

compare("Nyitva", "tartás");

compare(7, 7);

compare(myFirstArray[0],mySecondArray[0]);

var myFirstFunctionVariable = function () {
    console.log("Ez egy függvény, amit változóban tároltunk el.")
}

myFirstFunctionVariable();

(function (text) {
    console.log("Ezt a függvényt egyből meghívtuk, amikor leírtuk.")
    console.log(text)
}("Hello"));

var mySecondFunctionVariable = function () {
    console.log("Ez vajon mikor fut le?");
}

var anotherVar = mySecondFunctionVariable;

anotherVar();

var theLastFunction = function (text) {
    console.log(typeof text);
    console.log(text());
}

theLastFunction(function () {
    return "Im calling the last function."
})

/*
var window = {
    addEventListener: function (eventName, eventFunction) {
    }
}
*/
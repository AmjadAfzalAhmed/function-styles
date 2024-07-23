"use strict";
// There are different ways to write function in Typescript, some of which are listed below:
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Style 1 (Generally / Commonly used functions that are created using keyword (function))
function greet1(name) {
    return `Hello, ${name}!`;
}
console.log(greet1('Amjad')); // This will print Hello, Amjad!
// Style 2
function greet2(name) {
    console.log(`Hello, ${name}!`);
}
;
greet2('Amjad'); // This will also print Hello, Amjad!
// Style 3 (Anonymous Function)
const greet3 = function (name) {
    return `Hello, ${name}!`;
};
const result = greet3('Amjad');
console.log(result); // This prints Hello, Amjad!
// Style 4 (Arrow Function, Fat Arrow Function of Lambda Function) Arrow Function Style 1
const greet4 = (name) => {
    return `Hello, ${name}!`;
};
console.log(greet4('Amjad')); // This would result the same as previous functions
// Style 5 (Arrow Function Style 2)
const greet5 = (name) => { console.log(`Hello, ${name}!`); };
greet5('Amjad'); // Prints Hello, Amjad!
// Style 6 (Arrow Function Style 3)
const greet6 = (name) => console.log(`Hello, ${name}!`);
greet6('Amjad'); //Displays result as Hello, Amjad!
// Style 7 (Async Function)
function greet7(name) {
    return __awaiter(this, void 0, void 0, function* () {
        return `Hello, ${name}!`;
    });
}
;
const run = greet7('Amjad');
console.log(run); //prints Hello, Amjad!
// Style 8 (IIFE Immediately Invoked Function Expression)
(function greet8(name) {
    console.log(`Hello, ${name}!`);
})('Amjad'); // prints Hello, Amjad!
/* Style 9 (Generator Function) This is an advanced level function which is used
to handle complex iterations*/
function* greet9(name) {
    yield `Hello, ${name}!`;
    yield `How are you, ${name}?`;
    yield `Goodbye, ${name}!`;
}
const display = greet9('Amjad');
console.log(display.next().value); // This prints Hello, Amjad!
console.log(display.next().value); // This line prints How are you,Amjad?
console.log(display.next().value); // This line prints Goodbye Amjad!

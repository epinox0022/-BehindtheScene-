'use strict';

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;

//     function printAge() {
//         let output = `${firstName}, You are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if(birthYear >= 2000 && birthYear <= 2012) {
//             var genZ = true;

//             // Creating new variable with same name as outer scope's variable
//             const firstName = 'Equinox';
//             const str = `oh, and you're a generation Z, ${firstName}`;
//             console.log(str);

//             // Reassigning outer scope's variable
//             output = 'NEW OUTPUT!!';

//             function add(a, b) {
//                 return a + b;
//             }

//         }

//         // console.log(add(2, 3));
//         console.log(genZ);
//         console.log(output);

//     }
//     printAge();

//     return age;

// }

// const firstName = 'Jhonny mark';
// calcAge(2005);

// Variables
// console.log(me);

// var me = 'Jhonny mark';
// let job = 'Programmer';
// const year = 2005;

// // FUNCTIONS

// console.log(add(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// function add(a, b) {

//     return a + b;
// };

// const addExpr = function(a, b) {

//     return a + b;
// }

// var addArrow = (a, b) => a + b;

// // Example

// if(!numProducts) deletShoppingCart();

// var numProducts = 10;

// function deletShoppingCart() {
//     console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// console.log(this);cc

// const calcAge = function (birthYear) {
//     console.log(2037-birthYear);
//     console.log(this);
// }

// calcAge(2005);

// const calcAgeArrow = birthYear => { // This is Arrow function
//     console.log(2037-birthYear);
//     console.log(this);
// };

// calcAge(2004) ;

// const mark =  {
//     year: 2005,
//     calcAge: function () {
//         console.log(this);
//         console.log(this.year - 2037 );
//     },
// };

// mark.calcAge()

// const matilda = {
//     year: 2009,
// };

// matilda.calcAge = mark.calcAge;
// matilda.calcAge();

// const f = mark.calcAge;

// var firstName = 'Matilda' // Don't use var it will make an error to you code

// const mark = {
//     firstName : 'Mark',
//     year: 2005,
//     calcAge: function () {
//         // console.log(this);
//         console.log(2037 - this.year);

//         // Solution 1
//         // // const self = this; // self or that
//         // const isMillenial = function() {
//         //     console.log(self);
//         //     console.log(self.year >= 2003 && self.year <= 2008);
//         // };

//         const isMillenial = function() {
//             console.log(this);
//             console.log(this.year >= 2003 && this.year <= 2008);
//         };

//         isMillenial()
//     },

//     greet: function () {
//         console.log(this);
//         console.log(`hey ${this.firstName}`);
//     },
// };

// mark.greet();
// mark.calcAge();

// const addExpr = function(a, b) {
//       console.log(arguments);
//       return a + b;
//     };
//     addExpr(2, 5);
//     addExpr(2, 5, 8, 12);

//     var addArrow = (a, b) => {
//         console.log(arguments);
//         return a + b;
//     };

//     addArrow(2, 5)

// let age = 30;
// let oldAge = age;
// age = 31;
// cconsole.log(oldAge);

// const me = {
//     name: 'mark',
//   onsole.log(age);
//   age: 19,
// };

// const friend = me;
// friend.age = 27;
// console.log('friend:', friend);
// console.log('me', me);

// PRIMITIVE TYPES

let lastname = 'Williams';
let oldLastName = lastname;
lastname = 'David';
console.log(lastname, oldLastName);

// REFERENCE TYPE

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before Marriage', jessica);
console.log('After Marriage', marriedJessica);

// COPYING OBJECTS

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
jessica.lastName = 'Davis';

jessica.family.push('Mary');
jessica.family.push('Jessica');

console.log('Before Marriage: ', jessica);
console.log('After Marriage: ', jessicaCopy);

'use strict';

console.log("DEMO BRANCH");

const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156, pronoun: 'they/them'},
  {name: 'Chris', height: 69, weight: 139},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]
console.log(peopleArray);

const person1 = peopleArray[0];
const person2 = peopleArray[1];

// (person1.height === person2.height) && (person1.weight === person2.weight);

person1.height = 100;
person1.shoeSize = 12;

// console.log(person1);

function addExclamation(string) {
  return string+"!!!";
}



const stringArray = ['Ada', 'Bob', 'Chris'];


const transformedArray = stringArray.map(addExclamation);
console.log(transformedArray);

const nameArray = peopleArray.map(function(personObj) {
  return personObj.name;
})
// console.log(nameArray);

// const obj1 = {a: 1, b: 2, c: [{x: 5, y:6},2]};
// const obj2 = {a: 1, b: 2, c: [{x: 5, y:6},2]};

// console.log(obj1 == obj2);


const foo = (params) => 'foo '+params;

console.log( foo("calling foo") );

const printHello = () => console.log("Hello world"); 

// const myArray = [1, 2];
// const [x, y, z] = myArray; //myArray elements to `x`, `y`, `z`
// console.log(x); //=> 1;
// console.log(y); //=> 2;
// console.log(z); //=> 3;

const myObject = {a: 1, b: 2, d:4};
const {b, a, c} = myObject; //myObject.a to a, etc.
console.log(a); //=> 1
console.log(b); //=> 2;
console.log(c); //=> 3;


// function getBMI(personObj) {
// }

function getBMI({height, weight}) {
  return 703*weight/(height*height);
}

const person = {name: 'Ada', height: 64, weight: 135}

const newPerson = {...person, height: 100, shoeSize: 12 };
console.log(newPerson);

const {height, weight, ...rest} = person;
console.log(height, weight, rest);
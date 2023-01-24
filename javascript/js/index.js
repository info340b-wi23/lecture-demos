'use strict';

// console.log("Hello world");
// console.log("It is way too early");

// const msgString = "hello";
// console.log(msgString);

// let hoursSlept;
// console.log(hoursSlept);

const letters = ['a', 'b', 'c'];
// console.log(letters);
// console.log(letters[4]);
letters[5] = 'f';
console.log("Letters after adding f", letters);

const num = 10
const str = '10'
const compare1 = (num == str)
const compare2 = (num === str)
const compare3 = ('' == 0) //empty String compare to 0
// console.log(compare3);

const agesObj = {sarah:42, amit:35, zhang:13}
console.log("ages: ", agesObj);
const numWordsObj = {1:'one', 2:'two', 3:'three'}
const keyArray = Object.keys(numWordsObj) //[ '1', '2', '3' ]
console.log(keyArray);

const dailySleepObj = {
  day: "Monday", 
  hoursSlept: 9
};

const howMuchSleepNum = dailySleepObj.hoursSlept;
console.log(howMuchSleepNum);

const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156},
  {name: 'Chris', height: 69, weight: 139},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]

//java
// for(let i=0; i<peopleArray.length; i++) {
//   console.log(peopleArray[i]);
// }

//Java: for each loop
//for(String aName : stringArray) {}

//JavaScript: for of loop
for(const aPerson of peopleArray) {
  console.log(aPerson);
}


function greet(greeting, name){
  return greeting  + ", " + name;
}





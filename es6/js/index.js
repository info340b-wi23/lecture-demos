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


function addExclamation(string) {
  return string+"!!!";
}

const stringArray = ['Ada', 'Bob', 'Chris'];

const transformedArray = stringArray.map(addExclamation);
console.log(transformedArray);

const nameArray = peopleArray.map(function(personObj) {
  return personObj.name;
})
console.log(nameArray);




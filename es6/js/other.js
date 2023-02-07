'use strict';

console.log("executing other.js");

const peopleArray = ["Ada", "Bob", "Charles"];

console.log ("other people", peopleArray);

export default function printOther(name) {
  console.log("Hello " + name + "! I'm other!");
}

export function printPrivate() {
  console.log("private");
}


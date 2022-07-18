// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2); // 100 100
age = 200;
console.log(age, age2); // 200 100

let name = "Jake";
let name2 = name;
console.log(name, name2); // Jake Jake
name = "Mollie";
console.log(name, name2); // Mollie Jake

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const team = players;

console.log(players, team); // [ 'Wes', 'Sarah', 'Ryan', 'Poppy' ] [ 'Wes', 'Sarah', 'Ryan', 'Poppy' ]

// You might think we can just do something like this:
// team[3] = "Lux";
console.log(team, players); // [ 'Wes', 'Sarah', 'Ryan', 'Lux' ] [ 'Wes', 'Sarah', 'Ryan', 'Lux' ]

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();
console.log(team2); // [ 'Wes', 'Sarah', 'Ryan', 'Poppy' ]

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];

const team5 = Array.from(players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// and think we make a copy:
// const captain = person;
// captain.number = 99;
console.log(person); // { name: 'Wes Bos', age: 80, number: 99 }

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99 });
console.log(cap2); //{ name: 'Wes Bos', age: 80, number: 99 }
console.log(person); // { name: 'Wes Bos', age: 80 }

// We will hopefully soon see the object ...spread
const cap3 = { ...person };
console.log(cap3); // { name: 'Wes Bos', age: 80 }

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const jake = {
  name: "Jake",
  age: 100,
  social: {
    twitter: "@jakeXcode",
    facbook: "jsFb",
  },
};

const dev = Object.assign({}, jake);

const dev2 = JSON.parse(JSON.stringify(jake));
console.log(JSON.parse(JSON.stringify(jake)));

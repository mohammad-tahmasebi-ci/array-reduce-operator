  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */

/*
// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum1 = nums.reduce((acc, curr) => {
console.log(
  'Accumulator:', acc,
  'Current value: ', curr,
  'Total: ', acc + curr);
  return acc + curr;
});  // no initial accumulator value has been provided
console.log(sum1);

let sum2 = nums.reduce((acc, curr) => {
  console.log(
    'Accumulator: ', acc,
    'Current value: ', curr,
    'Total:', acc + curr
  );
  return acc + curr;
}, 0);  // 0 here is the initial accumulator value
console.log(sum2);

let sum3 = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum3);

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);

// Grouping by a property, and totaling it too
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});  // {} denotes the initial object value to be used for the accumulator

console.log(experienceByProfession);
*/

let students = [
  {
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 73, art: 95},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 93, english: 88, maths: 97, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 87, art: 95},
  }
];
/*
const biggest = students.reduce((acc, curr) => {
  return acc > curr.results.english ? acc : curr.results.english;
}, {});

console.log(biggest);
let student = students.filter(item => item.results.english === biggest);
let result = {'name': student[0].name, 'max': biggest};
console.log(result);
*/
/*
let max = 0;
let key = {};

const biggest = students.reduce((acc, curr) => {
  //let val = curr.results.english;
  if (max < curr.results.english) {
    max = curr.results.english;
    key = curr;
  } 
  let {name} = key;
  acc = {...acc, name, 'max': max};
  return acc;
}, {name: '', max: 0});

console.log(biggest);
*/

const biggest = students.reduce((acc, curr) => {
  acc = acc.max > curr.results.english ? acc: {name: curr.name, max: curr.results.english};
  return acc;
}, {name: '', max: 0});

console.log(biggest);
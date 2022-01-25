  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:

const nums = [0, 1, 2, 3, 4,]
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);


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
// Starting value = empty object {} because we want our result to be returned as an object
// i.e. {Developer: 12, Designer: 4}
let ExperienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]){    // if key/profession does not already exist
    acc[key] = curr.yrsExperience;       // create key/profession and add team members years of experience.
  } else {                        // Otherwise, if key/profession already exists
    acc[key] += curr.yrsExperience;    // add team members years experience to accumulator
  }
  return acc;
}, {}); // starting value = empty object
console.log(ExperienceByProfession);

// Exercise. Finding highest value using reduce method

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

const biggest = students.reduce((acc, cur) => {
  acc = acc.max > cur.results.english ? acc: {name:cur.name, max:cur.results.english};
  return acc;
  }, {name: '', max: 0});
console.log(biggest);

/* Using destructuring 
const biggest = students.reduce(({max, name}, {name, results:{english}}) => {
  if(max < english) {
      acc = {name:name, max: english};
  }
  return acc;
  }, {name: '', max: 0});
  
console.log(biggest);
*/
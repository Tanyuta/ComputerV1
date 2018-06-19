let validate = require('./validate');
let parsing = require('./parsing');
let reduceForm = require('./reduceForm');
let findDegree = require('./findDegree');
let solveEquation = require('./solveEquation');


if (process.argv && process.argv.length === 3) {

  let obj = {
      str : process.argv[2].replace(/\s/g,''),
      char : '',
      maxDegree: 0,
      reducedForm : "",
      myMap : [],
      leftSide: [],
      rightSide: [],
      state : true // check for the presence of the right-hand side
    }

  try {
    validate(obj);
    parsing(obj);
    reduceForm(obj);
    findDegree(obj);
    solveEquation(obj);

  } catch (error) {
    console.error(error.message);
  }

} else if (process.argv.length === 2) {
  console.log("No parameters found in input.");
} else {
  console.log("Too many parameters. Only one string is allowed");
}

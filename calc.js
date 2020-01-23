const operations = require('./operations');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`
Welcome to Calc.js

The user will be promped for two numbers, then choose an operation.
`);

rl.question('First Number: ', x => {
  rl.question('Second Number: ', y => {
    rl.question(
      `
    Operator:

    [1] Addition
    [2] Subtraction
    [3] Multiplication
    [4] Division
    `,
      operator => {
        if (!operations.validateNumbers(x, y)) {
          console.log('only real numbers are allowed!');
        } else {
          switch (operator) {
            case '1':
              console.log(
                `The sum of ${x} and ${y} is ${operations.add(x, y)}`
              );
            case '2':
              console.log(
                `The difference of ${x} and ${y} is ${operations.subtract(
                  x,
                  y
                )}`
              );
            case '3':
              console.log(
                `The product of ${x} and ${y} is ${operations.multiply(x, y)}`
              );
            case '4':
              console.log(
                `The quotient of ${x} and ${y} is ${operations.divide(x, y)}`
              );
          }
        }

        rl.close();
      }
    );
  });
});

const assert = require('assert');
const operations = require('./operations');

it('correctly evaluates the sum of 1 and 3', () => {
  assert.equal(operations.add(1, 3), 4);
});

it('correctly evaluates the sum of -5 and -3', () => {
  assert.equal(operations.add(-5, -3), -8);
});

it('correctly evaluates the difference between 6 and 2', () => {
  assert.equal(operations.subtract(6, 2), 4);
});

it('correctly evaluates the product of 3 and 7', () => {
  assert.equal(operations.multiply(3, 7), 21);
});

it('correctly evaluades the quotient of 10 and 5', () => {
  assert.equal(operations.divide(10, 5), 2);
});

it('indicates failure when a string is used', () => {
  assert.equal(operations.validateNumbers('hello', 3), false);
});

it('indicates failure when 2 strings are used', () => {
  assert.equal(operations.validateNumbers('hello', 'hello'), false);
});

it('indicates success when 2 numbers are used', () => {
  assert.equal(operations.validateNumbers(4, 4), true);
});

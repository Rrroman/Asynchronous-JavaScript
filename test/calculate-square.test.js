const calculateSquare = require('../calculate-square');
const expect = require('chai').expect;

describe('calculateSquare', () => { 
  if ('should return 4 if passed 2', function () {
    calculateSquare(2, (err, result) => {
      expect(result).to.equal(5);
    });
  });
})
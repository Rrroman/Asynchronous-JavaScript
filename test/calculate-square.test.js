const calculateSquare = require('../calculate-square');
const expect = require('chai').expect;

describe('calculateSquare', () => { 
  it ('should return 4 if passed 2', function (done) {
    calculateSquare(2, function (error, result) {
      console.log('callback called!!!');
      expect(result).to.equal(5);
      done();
    });
  });
})
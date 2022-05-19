const calculateSquare = require('../calculate-square');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;


describe('calculateSquare', function () {
  // Add at least one more second higher than the timeout in your test file.
  this.timeout(4000)

  it('should return 4 if passed 2', function () {
    return expect(calculateSquare(2)).to.eventually.equal(4);
  });
  it('should return 9 if passed 3', function () {
    return expect(calculateSquare(3)).to.eventually.equal(9);
  });

});

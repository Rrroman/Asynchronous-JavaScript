const calculateSquare = require('../calculate-square');
const chai = require('chai');
// const expect = require('chai').expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculateSquare', () => {
  it('should return 4 if passed 2', function (done) {
    calculateSquare(2).then(result => {
      expect(result).to.equal(4);
      done();
    }, err => {
      done(err);
    });
  });
});

describe('calculateSquare', () => {
  it('should return 4 if passed 2', function () {
    return expect(calculateSquare(2)).to.eventually.equal(4);
  });

  // to work properly, you need to use chai-as-promised with return or with done
  it('should become fulfilled when passed 2', function (done) {
    expect(calculateSquare(2)).to.be.fulfilled.notify(done);
  });

  it('should become rejected when passed a string', function () {
    return expect(calculateSquare('string')).to.be.rejected;
  });

});

import { calculateSquare } from '../calculate-square.mjs';
import { expect } from 'chai';

describe('calculateSquare', () => {
  it('should return 4 if passed 2', function () {
    calculateSquare(2, (err, result) => {
      expect(result).to.equal(5);
    });
  });
});

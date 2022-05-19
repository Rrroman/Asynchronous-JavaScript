function calculateSquare(number, callback) {
  setTimeout(function () {
    if (typeof number !== 'number') {
      callback(new Error('Argument is not a number'));
      return;
    }
    const result = number * number;
    callback(null, result);
  }, 1000);
}

module.exports = calculateSquare;
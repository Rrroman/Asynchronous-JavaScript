function calculateSquare(num, callback) {
  setTimeout(function () {
    if (typeof num !== 'number') {
      callback(new Error('Argument is not a number'));
      return;
    }
    const result = num * num;
    callback(null, result);
  }, 2000);
}

export {calculateSquare};
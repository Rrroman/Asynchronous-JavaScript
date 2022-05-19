// function calculateSquare(number, callback) {
//   setTimeout(function () {
//     if (typeof number !== 'number') {
//       callback(new Error('Argument is not a number'));
//       return;
//     }
//     const result = number * number;
//     callback(null, result);
//   }, 1000);
// }

function calculateSquare(number) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (typeof number !== 'number') {
        return reject(new Error('Argument is not a number'));
      }
      resolve(number * number);
    }, 3000);
  });
}

// calculateSquare(1)
//   .then((val) => {
//     console.log(val);
//     return calculateSquare(2);
//   })
//   .then((val) => {
//     return new Promise((resolve, reject) => {
//       reject(new Error('Error Custom'));
//       resolve(val);
//       console.log('after');
//     });
//   })
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

module.exports = calculateSquare;

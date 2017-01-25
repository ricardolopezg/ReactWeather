// function getTempCallback (location, callback ) {
//   callback(undefined, 78); //successfull callback in Asynchronous returns
//   callback('City not found'); //unsuccessfull callback in Asynchronous returns
// }
//
// getTempCallback('Philadelphia', function(err, temp) {
//     if (err) {
//       console.log('error', err);
//     } else {
//       console.log('success', temp);
//     }
// });
//
// function getTempPromise(location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found')
//     }, 2000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// })

// CHALLENGE AREA
// resolve the sum or a + b
// if NaN return error callback string
function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve (a + b);
      } else if (typeof a === 'string' && typeof b === 'number') {
        reject ('a is NaN, fool')
      } else if (typeof a === 'number' && typeof b === 'string') {
        reject ('b is NaN, sucka')
      } else {
        reject ('neither are numbers, bitch!')
      }
    }, 2000);
  });
}

addPromise(1,6).then(function(sum) {
  console.log(sum);
}, function(err) {
  console.log(err);
});

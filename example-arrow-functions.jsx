var names = ['Ricky', 'Errol', 'Gil'];
//
// names.forEach(function(name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log((returnMe, 'Ricky'));

// var person = {
//   name: 'Ricky',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// }
//
// person.greet();


// CHALLENGE AREA
function add (a, b) {
  return a + b;
}

console.log(add (3, 9));
console.log(add (4, 2));

// addStatement
var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement (4, 7));

// addExpression
var addExpression = (a, b) => a + b;
console.log(addExpression (3, -2));

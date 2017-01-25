var React = require('react');
//
// var Examples = React.createClass({
//   render: function() {
//     return(
//       <h3>Examples Component</h3>
//     );
//   }
// });

// Refactored
var Examples = (props) => {
  return (
    <h3>Examples Component</h3>
    <p>Welcome to examples page!</p>
  );
}

module.exports = Examples;

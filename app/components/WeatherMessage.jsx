var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function() {
//     var errorMessage = "City does not exist!";
//     var {temp, location} = this.props;
//
//     return (
//       <h3>The Weather in {location} is {temp} degrees.</h3>
//     );
//   }
// });

// Refactored
var WeatherMessage = ({temp, location}) => {
  return (
    <h3>The Weather in {location} is {temp} degrees.</h3>
  );
}


module.exports = WeatherMessage;

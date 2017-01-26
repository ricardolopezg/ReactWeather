var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

var border = {
  border: '2px red'
}

// Refactored
var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About This App</h1>
      <p>
        I built this in React. I built this in React. I built this in React. I built this in React. I built this in React. I built this in React. I built this in React. I built this in React. I built this in React. I built this in React. I built this in React. I built this in React. I built this in React.
      </p>
      <p>I used these tools:</p>
      <ol>
        <li>
          <a href = "https://facebook.github.io/react/">React</a> - JS Framework used.
        </li>
        <li>
          <a href = "http://openweathermap.org">Open Weather Map</a> - Used to call Weather API.
        </li>
      </ol>
    </div>
  );
}

module.exports = About;

var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');


var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;

    debugger;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function (temp) {
      setTimeout(function() {
        that.setState({
          location: location,
          temp: temp,
          isLoading: false
        });
      }, 1000);
    }, function (errorMessage) {
      that.setState({isLoading: false});
      var errorMessage = "City doesn't exist, Hombre."
      alert(errorMessage);
    });
  },
  render: function() {
    var {isLoading, temp, location} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;

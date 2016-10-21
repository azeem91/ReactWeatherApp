var React = require('react');

var About = React.createClass({
  render:function(){
    return (
       <div>
        <h1 className="text-center">About</h1>
        <p>
        	A tiny Weather App build on React.<br/>
        	React is pretty awesome and the concept of React is very  
        	<strong> Attractive </strong> and <strong>Effective</strong>. 
        </p>
        <h5>Stuff use to build it.</h5>
        <ul>
        	<li>
        		<a href="https://facebook.github.io/react/">
        			React
        		</a> - JavaScript framework used.
        	</li>
        	<li>
        		<a>Open Weather Map</a> - used Open Weather Map to Search for weather data by city name.
        	</li>
        </ul>
      </div>
    );
  }
});

module.exports = About;

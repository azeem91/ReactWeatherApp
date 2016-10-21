var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
  render:function(){
    return (
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Her are few example location to try out:</p>
        <ol>
        	<li>
        		<Link to="/?location=lahore">Lahore</Link>
        	</li>
        	<li>
        		<Link to="/?location=islamabad">Islamabad</Link>
        	</li>
        </ol>
      </div>
    );
  }
});

module.exports = Examples;

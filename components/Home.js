var React = require('react');
var Title = require('react-document-title');

// Require React-Router
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var lchGenerator = require('./lchGenerator');

var Home = React.createClass({

  render: function() {

    var orgColor = "#24a46f"

    var theme = lchGenerator.createTheme(orgColor)

    var swatches = theme.map(function(hexColor) {
      var themeColors = hexColor.map(function(color) {
        var divStyle = {
          backgroundColor: color,
          height: "80px",
          width: "120px",
          display: "inline-block"
        };

        return <div style={divStyle} key={color}></div>
      })

      return (
        <div key={hexColor}>
          {themeColors}
        </div>
      )
    })

    return (
      <div>
        {swatches}
      </div>
    );
  }

});

module.exports = Home;

/** @jsx React.DOM */

var React = require('react');

// Require view components. One for each route.
var App = require('./components/App');
var Home = require('./components/Home');

var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var Routes = (
  <Route handler={App}>
    <DefaultRoute name="Home" handler={Home}/>
  </Route>
);

module.exports = Routes;
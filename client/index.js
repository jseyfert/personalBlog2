var React = require('react');
var ReactDOM = require('react-dom');
var Footer = require('./Footer');
var Header = require('./Header');
var PhotoApp = require('./PhotoComps/PhotoApp');
require('./stylesheets/main.scss');

var App = React.createClass({
  getInitialState: function() {
    return {
      refresh: true,
      photoApp: true,
      footer: true
    }
  },
  resetPhotoState() {
    this.setState({
      refresh: false,
      photoApp: true,
      footer: true
    })
  },
  setPhotoState: function() {
    this.setState({
      refresh: true,
      photoApp: true,
      footer: false
    })
  },
  showPhotoApp: function(){
    if (this.state.photoApp){
      return <PhotoApp setPhotoState={this.setPhotoState}/>
    } else {
      return null;
    }
  },
  showFooter: function(){
    if (this.state.footer){
      return <Footer/>
    } else {
      return null;
    }
  },
  setActiveComponent1: function(componentName) {
    this.setState({
      activeComponent: componentName
    })
  },
  render: function() {
    return (
      <div>
      <Header buttonToggle={this.state.refresh} resetPhotoState={this.resetPhotoState} />
      { this.showPhotoApp() }
      { this.showFooter() }
      </div>           
      )
  }
});

ReactDOM.render(<App />, document.getElementById('app')
);

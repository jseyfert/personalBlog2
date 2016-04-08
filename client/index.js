var React = require('react');
var ReactDOM = require('react-dom');
var Footer = require('./Footer');
var Header = require('./Header');
var About = require('./About');
var PhotoView = require('./PhotoComps/PhotoView');
var PhotoMainNav = require('./PhotoComps/PhotoMainNav');
var PhotoContinentNav = require('./PhotoComps/PhotoContinentNav');
require('./stylesheets/main.scss');

var App = React.createClass({
  getInitialState: function() {
    return {
      activeComponent: 'PhotoMainNav',
      photoItems: null,
      photoFormat: null
    }
  },
  setActiveComponent: function(componentName, photoItems, photoFormat) {
    this.setState({
      activeComponent: componentName,
      photoItems: photoItems,
      photoFormat: photoFormat
    })
  },
  reSetActiveComponent: function() {
    this.setState({
      activeComponent: 'PhotoMainNav',
      photoItems: null,
      photoFormat: null
    })
  },
  showWhichComponent: function() {
    switch(this.state.activeComponent) {
        case 'PhotoMainNav':
            return <PhotoMainNav setActiveComponent={ this.setActiveComponent } />
            break;
        case 'PhotoContinentNav':
            return <PhotoContinentNav setActiveComponent={ this.setActiveComponent}/>
             break;
        case 'PhotoView':
            return <PhotoView photoItems={this.state.photoItems}/>
             break;
        case 'About':
            return <About setActiveComponent={ this.setActiveComponent }/>
    };
  },

  render: function() {
    return (
      <div>
      <Header setActiveComponent={this.setActiveComponent} reSetActiveComponent={this.reSetActiveComponent} activeComponent={this.state.activeComponent}/>
      {this.showWhichComponent()}
      <Footer/>
      </div>           
      )
  }
});

ReactDOM.render(<App />, document.getElementById('app')
);

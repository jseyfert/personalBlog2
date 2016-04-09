var React = require('react');
var ReactDOM = require('react-dom');
var Footer = require('./Footer');
var Header = require('./Header');
var About = require('./About');
var PhotoView = require('./PhotoComps/PhotoView');
var PhotoMainNav = require('./PhotoComps/PhotoMainNav');
var PhotoContinentNav = require('./PhotoComps/PhotoContinentNav');
require('./stylesheets/main.scss');
var photoItemsArray = ['north-america', 'europe', 'asia', 'south-america', 'africa', 'australia'];
var photoFormatArray = ['col-xs-12', 'col-xs-6', 'col-xs-4'];

var App = React.createClass({
  getInitialState: function() {
    return {
      activeComponent: 'PhotoMainNav',
      photoItems: null,
      photoFormat: null,
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
  selectPreviousPhotoItem: function() {
    var stateIndex = photoItemsArray.indexOf(this.state.photoItems);
    var setState = stateIndex === 0 ? photoItemsArray[5] : photoItemsArray[stateIndex - 1];
    this.setState({
      photoItems: setState
    })
  },
  selectNextPhotoItem: function() {
    var stateIndex = photoItemsArray.indexOf(this.state.photoItems) + 1;
    var setState = stateIndex === 5 ? photoItemsArray[0] : photoItemsArray[stateIndex];
    this.setState({
      photoItems: setState
    })
  },
  selectPreviousPhotoFormat: function() {
    var stateIndex = photoFormatArray.indexOf(this.state.photoFormat);
    var setState = stateIndex === 0 ? photoFormatArray[2] : photoFormatArray[stateIndex - 1];
    this.setState({
      photoFormat: setState
    })
  },
  selectNextPhotoFormat: function() {
    var stateIndex = photoFormatArray.indexOf(this.state.photoFormat) + 1;
    var setState = stateIndex === 2 ? photoFormatArray[0] : photoFormatArray[stateIndex];
    this.setState({
      photoFormat: setState
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
            return this.state.photoItems ? <PhotoView photoItems={this.state.photoItems} photoFormat={this.state.photoFormat}/> : null;
             break;
        case 'About':
            return <About setActiveComponent={ this.setActiveComponent }/>
    };
  },
  showWhichphotoItem: function() {
    switch(this.state.photoItems) {
        case 'PhotoMainNav':
            return <PhotoMainNav setActiveComponent={ this.setActiveComponent } />
            break;
        case 'PhotoContinentNav':
            return <PhotoContinentNav setActiveComponent={ this.setActiveComponent}/>
             break;
        case 'PhotoView':
            return this.state.photoItems ? <PhotoView photoItems={this.state.photoItems} photoFormat={this.state.photoFormat}/> : null;
             break;
        case 'About':
            return <About setActiveComponent={ this.setActiveComponent }/>
    };
  },

  render: function() {
    return (
      <div>
      <Header 
      setActiveComponent = {this.setActiveComponent} 
      reSetActiveComponent = {this.reSetActiveComponent} 
      selectPreviousPhotoItem = {this.selectPreviousPhotoItem} 
      selectNextPhotoItem = {this.selectNextPhotoItem} 
      selectPreviousPhotoFormat = {this.selectPreviousPhotoFormat} 
      selectNextPhotoFormat = {this.selectNextPhotoFormat} 
      activeComponent = {this.state.activeComponent} 
      photoItems = {this.state.photoItems} 
      photoFormat = {this.state.photoFormat}/>

      {this.showWhichComponent()}
      
      <Footer/>
      </div>           
      )
  }
});

ReactDOM.render(<App />, document.getElementById('app')
);

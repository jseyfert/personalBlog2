var React = require('react');
var PhotoMainNav = require('./PhotoMainNav');
var PhotoContinentNav = require('./PhotoContinentNav');

var PhotoApp = React.createClass({
  getInitialState: function() {
    return {
      activeComponent: 'PhotoMainNav'
    }
  },
  setActiveComponent: function(componentName) {
    this.setState({
      activeComponent: componentName
    })
  },
  showWhichComponent: function() {
    switch(this.state.activeComponent) {
        case 'PhotoMainNav':
            return <PhotoMainNav setActiveComponent={ this.setActiveComponent } setPhotoState={this.props.setPhotoState}/>
            break;
        case 'PhotoContinentNav':
            return <PhotoContinentNav setActiveComponent={ this.setActiveComponent }/>
    };
  },
  render: function() {
  return (
          <div>
            <div className="jumbotron jumbotron-fluid">
              <div className="container"><br/>
                <h1 className="display-3"></h1>
              </div> 
              <nav>
                <ul className="pager">
                  { this.showWhichComponent() }
                </ul>
              </nav>
            </div>
          </div>
          )
  }
});

module.exports = PhotoApp;
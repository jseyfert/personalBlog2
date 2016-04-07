var React = require('react');

var PhotoMainNav = React.createClass({
  render: function() {
  return (
          <nav className="navbar">
            <div className="btn-group widenButtons">
              <a className="btn btn-default whiteText" href="#" onClick={ this.props.setActiveComponent.bind(null, "PhotoContinentNav") } >
                <i className="fa fa-camera fa-5x"></i>
              </a>  
              <a className="btn btn-default whiteText" href="#">
                <i className="fa fa-paint-brush fa-5x"></i>
              </a> 
              <a className="btn btn-default whiteText" href="#">
                <i className="fa fa-quote-left fa-5x"></i>
              </a>  
            </div>
          </nav>
          )
    }
});

module.exports = PhotoMainNav;
var React = require('react');

var PhotoContinentNav = React.createClass({
  render: function() {
  return (
          <nav className="navbar">
            <div className="btn-group widenButtons">
              <a href="#">
                <i className="icon-north-america makeBigger whiteText"></i>
              </a> 
              <a href="#">
                <i className="icon-europe makeBigger whiteText"></i>
              </a> 
              <a href="#">
                <i className="icon-asia makeBigger whiteText" id="makeBi"></i>
              </a>            
              <a href="#">
                <i className="icon-south-america makeBigger whiteText"></i>
              </a>  
              <a href="#">
                <i className="icon-africa makeBigger whiteText"></i>
              </a>  
              <a href="#">
                <i className="icon-australia makeBigger whiteText"></i>
              </a>                
            </div>
          </nav>
          )
    }
});

module.exports = PhotoContinentNav;
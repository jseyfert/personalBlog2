var React = require('react');

var About = React.createClass({
  render: function() {
    return (
          <div>
            <div className="jumbotron jumbotron-fluid">
              <div className="container"><br/>
                <h1 className="display-3"></h1>
              </div> 
              <nav>
                <ul className="pager">
                 in about page
                </ul>
              </nav>
            </div>
          </div>
            ) 
  }
});

module.exports = About;
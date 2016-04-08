var React = require('react');

var PhotoMainNav = React.createClass({
  render: function() {
     // console.log('photo Main nav', this.props.setResetButton);
  return (
          <div>
            <div className="jumbotron jumbotron-fluid">
              <div className="container"><br/>
                <h1 className="display-3"></h1>
              </div> 
              <nav>
                <ul className="pager">
                  <nav className="navbar">
                    <div className="btn-group widenButtons">
                      <a className="btn btn-default whiteText" onClick={this.props.setActiveComponent.bind(null, 'PhotoContinentNav', null)} >
                        <i className="fa fa-camera fa-5x"></i>
                      </a>  
                      <a className="btn btn-default whiteText" onClick={this.props.setActiveComponent.bind(null, 'PhotoView', 'paintings')} >
                        <i className="fa fa-paint-brush fa-5x"></i>
                      </a> 
                      <a className="btn btn-default whiteText" onClick={this.props.setActiveComponent.bind(null, 'PhotoView', 'quotes')} >
                        <i className="fa fa-quote-left fa-5x"></i>
                      </a>  
                    </div>
                  </nav>
                </ul>
              </nav>
            </div>
          </div>
          )
    }
});

module.exports = PhotoMainNav;
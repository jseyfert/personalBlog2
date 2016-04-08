var React = require('react');

var PhotoContinentNav = React.createClass({
  render: function() {
    // console.log('photo cont nav', this.props.setResetButton);
    // this.props.setResetButton()
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
                      <a onClick={this.props.setActiveComponent.bind(null, 'PhotoView', 'north-america') } >
                        <i className="icon-north-america makeBigger whiteText"></i>
                      </a> 
                      <a onClick={ this.props.setActiveComponent.bind(null, "PhotoView", "europe") } >
                        <i className="icon-europe makeBigger whiteText"></i>
                      </a> 
                      <a onClick={ this.props.setActiveComponent.bind(null, "PhotoView", "asia") } >
                        <i className="icon-asia makeBigger whiteText" id="makeBi"></i>
                      </a>            
                      <a onClick={ this.props.setActiveComponent.bind(null, "PhotoView", "south-america") } >
                        <i className="icon-south-america makeBigger whiteText"></i>
                      </a>  
                      <a onClick={ this.props.setActiveComponent.bind(null, "PhotoView", "africa") } >
                        <i className="icon-africa makeBigger whiteText"></i>
                      </a>  
                      <a onClick={ this.props.setActiveComponent.bind(null, "PhotoView", "australia") } >
                        <i className="icon-australia makeBigger whiteText"></i>
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

module.exports = PhotoContinentNav;
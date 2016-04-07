var React = require('react');

var Footer = React.createClass({
  buttonToggle: function() {
    if (!this.props.buttonToggle) {
      return (
        <div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-header">
           <a className="whiteText johnny">
           <i className="fa fa-diamond fa-lg"></i>
           </a>
          </button>
          <a className="whiteText" href="/">ABOUT</a><span> | </span>
          <a className="whiteText" href="/photo">INSPIRATION</a><span> | </span>
          <a className="whiteText" href="/blog">BLOG</a>
        </div>
        )
    } else {
      return (
        <div>
        <a href="#" onClick={console.log("IN RESET BUTTON")}><i className="icon-refresh makeBigger" ></i></a>
        </div>
      )
    }
  },
  render: function()  {
    
    return (
            <div className="pos-f-t">
                <div className="collapse" id="navbar-header">
                    <div className="container-fluid sunset p-a-1">
                        <div className="btn-group" role="group" aria-label="Basic example">
                        <p>place cool photo here</p>
                        </div>
                    </div>
                </div>
                <div className="nav navbar-nav navbar-right para-text">
                    {this.buttonToggle()}
                </div>
            </div>
      )
  }
});

module.exports = Footer;
var React = require('react');

var Footer = React.createClass({
  buttonToggle: function() {
    var photoItems = this.props.photoItems
    var photoFormat = this.props.photoFormat
    // console.log('buttonTOGGLE', this.props.selectPreviousItem);
    if (this.props.activeComponent !== 'PhotoView') {
      return (
        <div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-header">
           <a className="whiteText johnny">
             <i className="fa fa-diamond fa-lg"></i>
           </a>
          </button>
          <a className="whiteText" href="#" onClick={this.props.setActiveComponent.bind(null, 'About')}>ABOUT</a><span> | </span>
          <a className="whiteText" href="#" onClick={this.props.setActiveComponent.bind(null, 'PhotoMainNav')} >INSPIRATION</a>
        </div>
        )
    } else {
      return (
        <div>
          <a href="#" onClick={this.props.reSetActiveComponent}>
            <i className="icon-refresh makeBigger" ></i>
          </a>
          <a href="#" onClick={this.props.selectPreviousPhotoItem}>
            <i className="icon-chevron-left makeBigger" ></i>
          </a>
          <a href="#">
            { photoItems }
          </a>
          <a href="#" onClick={this.props.selectNextPhotoItem}>
            <i className="icon-chevron-right makeBigger" ></i>
          </a>
            <a href="#" onClick={this.props.selectPreviousPhotoFormat}>
            <i className="icon-chevron-left makeBigger" ></i>
          </a>
          <a href="#" >
            { photoFormat }
          </a>
          <a href="#" onClick={this.props.selectNextPhotoFormat}>
            <i className="icon-chevron-right makeBigger" ></i>
          </a>
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
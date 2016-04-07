var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
           <nav>
            <ul className="pager">
              <footer className="footer">
                <div className="container">
                  <span className="text-muted">
                    <div className="btn-group">
                      <a className="btn btn-default whiteText" href="#">
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-square-o fa-stack-2x"></i>
                          <i className="fa fa-linkedin fa-stack-1x"></i>
                        </span>
                      </a>
                      <a className="btn btn-default whiteText" href="#">
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-square-o fa-stack-2x"></i>
                          <i className="fa fa-github fa-stack-1x"></i>
                        </span>
                      </a>
                    <a className="btn btn-default whiteText" href="#">
                      <span className="fa-stack fa-lg">
                        <i className="fa fa-square-o fa-stack-2x"></i>
                        <i className="fa fa-spotify fa-stack-1x"></i>
                      </span>
                    </a>  
                    <a className="btn btn-default whiteText" href="#">
                      <span className="fa-stack fa-lg">
                        <i className="fa fa-square-o fa-stack-2x"></i>
                        <i className="fa fa-instagram fa-stack-1x"></i>
                      </span>
                    </a>
                  </div>
                </span>
              </div>
            </footer>
          </ul>
          </nav> 
      )
  }
});

module.exports = Footer;
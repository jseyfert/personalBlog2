var React = require('react');

var PhotoView = React.createClass({
  showWhatPhotos: function() {
    switch(this.props.photoItems) {
        case 'north-america':
            return ['http://d38zt8ehae1tnt.cloudfront.net/A_Trippy_American_Propaganda_Video_From_The_1970s__148241.jpg?v=1375686324']
            break;
        case 'europe':
            return ['http://www.adweek.com/files/adfreak/6a00d8341c51c053ef01348727acf9970c-450wi',
                    'http://www.adweek.com/files/adfreak/6a00d8341c51c053ef01348727acf9970c-450wi']
            break;
        case 'asia':
            return ['http://brandinginasia.com/wp-content/uploads/2015/10/China-Propaganda-video-weird-cool-Branding-in-Asia-696x460.jpg',
                    'http://brandinginasia.com/wp-content/uploads/2015/10/China-Propaganda-video-weird-cool-Branding-in-Asia-696x460.jpg',
                    'http://brandinginasia.com/wp-content/uploads/2015/10/China-Propaganda-video-weird-cool-Branding-in-Asia-696x460.jpg']
            break;
        case 'south-america':
            return ['http://www.magic-mushrooms-shop.com/wpmulti/wp-content/uploads/2016/02/DSC_5180-696x422-624x422.jpg',
                    'http://www.magic-mushrooms-shop.com/wpmulti/wp-content/uploads/2016/02/DSC_5180-696x422-624x422.jpg',
                    'http://www.magic-mushrooms-shop.com/wpmulti/wp-content/uploads/2016/02/DSC_5180-696x422-624x422.jpg']
            break;
        case 'africa':
            return ['http://penetrationinc.typepad.com/.a/6a00e55229acd6883301b8d17797ca970c-pi',
                    'http://penetrationinc.typepad.com/.a/6a00e55229acd6883301b8d17797ca970c-pi',
                    'http://penetrationinc.typepad.com/.a/6a00e55229acd6883301b8d17797ca970c-pi',
                    'http://penetrationinc.typepad.com/.a/6a00e55229acd6883301b8d17797ca970c-pi']
            break;
        case 'australia':
            return ['https://bitchfacekillah.files.wordpress.com/2011/08/article-0-0da1245b00000578-389_964x619.jpg',
                    'https://bitchfacekillah.files.wordpress.com/2011/08/article-0-0da1245b00000578-389_964x619.jpg',
                    'https://bitchfacekillah.files.wordpress.com/2011/08/article-0-0da1245b00000578-389_964x619.jpg',
                    'https://bitchfacekillah.files.wordpress.com/2011/08/article-0-0da1245b00000578-389_964x619.jpg',
                    'https://bitchfacekillah.files.wordpress.com/2011/08/article-0-0da1245b00000578-389_964x619.jpg']
            break;
        case 'paintings':
            return ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-DxOwjTMhZsjR0u-rysg7wGkXbhenDvJ3Mx1IVRlBFU-wE4aGVg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-DxOwjTMhZsjR0u-rysg7wGkXbhenDvJ3Mx1IVRlBFU-wE4aGVg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-DxOwjTMhZsjR0u-rysg7wGkXbhenDvJ3Mx1IVRlBFU-wE4aGVg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-DxOwjTMhZsjR0u-rysg7wGkXbhenDvJ3Mx1IVRlBFU-wE4aGVg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-DxOwjTMhZsjR0u-rysg7wGkXbhenDvJ3Mx1IVRlBFU-wE4aGVg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-DxOwjTMhZsjR0u-rysg7wGkXbhenDvJ3Mx1IVRlBFU-wE4aGVg']
            break;
        case 'quotes':
            return ['http://weneedfun.com/wp-content/uploads/2016/03/Mark-Twain-Quotes-2.png',
                    'http://weneedfun.com/wp-content/uploads/2016/03/Mark-Twain-Quotes-2.png',
                    'http://weneedfun.com/wp-content/uploads/2016/03/Mark-Twain-Quotes-2.png',
                    'http://weneedfun.com/wp-content/uploads/2016/03/Mark-Twain-Quotes-2.png',
                    'http://weneedfun.com/wp-content/uploads/2016/03/Mark-Twain-Quotes-2.png',
                    'http://weneedfun.com/wp-content/uploads/2016/03/Mark-Twain-Quotes-2.png',
                    'http://weneedfun.com/wp-content/uploads/2016/03/Mark-Twain-Quotes-2.png']
    };
  },
  whatPhotoFormat: function(){
    var photoFormat = this.props.photoFormat
    console.log(photoFormat);
    var photos = this.showWhatPhotos().map(function(item){
    return (   
          <div className={ photoFormat }>
            <img src={ item } className="img-fluid img-rounded center-block" alt="Responsive image"/>
          </div>
            )
    })
    return (
          <div className="row">
            { photos }
          </div>
            )

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
                     {this.whatPhotoFormat()}
                </ul>
              </nav>
            </div>
          </div>
    )
    }
});

module.exports = PhotoView;
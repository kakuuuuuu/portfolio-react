import React from 'react';
const BannerImg = require('./images/header.png')
// import BannerImg from 'images/banner.png';

class Banner extends React.Component {
   render() {
      return (
        <div id='banner' className='parallax-container'>
          <div className='valign-wrapper'>
            <div className='valign center-block'>
              <h1 id='name' className='whitefont center-align raleway banner-hidden'>Kyle Tsuyemura</h1>
              <h3 id='title' className='tealfont center-align raleway banner-hidden'>Web Developer</h3>
            </div>
          </div>
          <div className="parallax">
            <img src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/IMG_2635.JPG' />
          </div>
        </div>
      );
   }
}
export default Banner;

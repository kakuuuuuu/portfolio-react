import React from 'react';

class Technology extends React.Component {
   render() {
     return(
       <div id='technology' className="section row valign-wrapper">
          <div className="techdiv row col m4 push-m8 s12 valign">
            <ul id='techanimation'>
              <li className='techscroll'>
                <h3 id='techtitle' className="header raleway center-align">Under The Hood</h3>
              </li>
              <li className='techscroll'>
                <h6 id='techdescript' className="tealfont raleway center-align">Some of the technology that powers my projects</h6>
              </li>
            </ul>
          </div>
          <div id='techimgs' className="techdiv row col m8 pull-m4 s12 valign">
            <div className='techrow row col s12 valign-wrapper'>
              <div className='col s3 valign'>
                <img className='techimg' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/logos.png' alt='logos' />
              </div>
              <div className='col s3 valign'>
                <img className='techimg' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/Python.png' alt='python' />
              </div>
              <div className='col s3 valign'>
                <img className='techimg' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/node.png' alt='node' />
              </div>
              <div className='col s3 valign'>
                <img className='techimg' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/angular.png' alt='angular' />
              </div>
            </div>
            <div className='techrow row container col s12 valign-wrapper'>
              <div className='col s3 valign'>
                <img className='techimg' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/swift.png' alt='swift' />
              </div>
              <div className='col s3 valign'>
                <img className='techimg' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/xcode.png' alt='xcode' />
              </div>
              <div className='col s3 valign'>
                <img className='techimg' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/django.png' alt='django' />
              </div>
              <div className='col s3 valign'>
                <img className='techimg' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/socket.png' alt='socket' />
              </div>
            </div>
          </div>
        </div>
    );

   }
 }
 export default Technology;

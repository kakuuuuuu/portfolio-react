import React from 'react';

class Projects extends React.Component {
   render() {
     return(
       <div id='projects' className='container'>
          <div className='row col s12 center-align'>
            <h2 id='projecttitle' className='header raleway'>Projects</h2>
            <ul id='projtitleanimation'>
              <li className='projtitlescroll'>
                <p id='projectdescript' className='raleway tealfont'>
                  Passionate for creating amazing products
                </p>
              </li>
            </ul>
          </div>
          <ul id='getoutanimation'>
            <li className='projscroll'>
              <div id='getout' className='row col s12'>
                <div className='row col s12'>
                  <h3 className='tealfont raleway projtitle'>Get Out</h3>
                </div>
                <div className='projdiv row col m6 s12'>

                  <p className='raleway projtext'>
                    Built With: Python | Flask | Pylot | Google Maps/Directions API | Open Weather API
                  </p>
                  <p className='raleway projtext'>
                    A web app designed to help you plan out activities around a chosen location. Plots nearby requested activities or restaurants and saves them to an itinerary for later. Final plans display routes based on the order of the itinerary.
                  </p>
                  <div className='row'>
                    <div className='col s3'>
                      <a href='https://github.com/kakuuuuuu/dayplanner' target='_blank'><img className='project-link' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/github.png' alt='github' /></a>
                      <p className='project-link-label blue-grey-font center-align'>GitHub</p>
                    </div>
                  </div>
                </div>
                <div className='projdiv container row col m6 s12 valign-wrapper'>
                  <img className='projgif valign materialboxed' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/getout.gif' alt='getout' />
                </div>
              </div>
            </li>
          </ul>
          <ul id='forgeanimation'>
            <li className='projscroll'>
              <div id='forge' className='row col s12'>
                <div className='row col s12'>
                  <h3 className='tealfont raleway projtitle'>Forge</h3>
                </div>
                <div className='projdiv row col m6 s12'>
                  <p className='raleway projtext'>
                    Built With: JavaScript | Node.js, Express.js | Angular.js | Twitch API | Passport | Amazon Product Advertising API
                  </p>
                  <p className='raleway projtext'>
                    Previews games that you're interested in with the top available Twitch streamer and matching Amazon product listings.
                  </p>
                  <div className='row'>
                    <div className='col s3'>
                      <a href='https://github.com/kakuuuuuu/forge' target='_blank'><img className='project-link' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/github.png' alt='github' /></a>
                      <p className='project-link-label blue-grey-font center-align'>
                        GitHub
                      </p>
                    </div>
                    <div className='col s3'>
                      <a href='http://leforge.co' target='_blank'><img className='project-link' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/www.png' alt='www' /></a>
                      <p className='project-link-label blue-grey-font center-align'>
                        Demo
                      </p>
                    </div>
                  </div>
                </div>
                <div className='projdiv container row col m6 s12 valign-wrapper'>
                  <img className='projgif valign materialboxed' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/forge.gif' alt='forge' />
                </div>
              </div>
            </li>
          </ul>
          <ul id='mapshareanimation'>
            <li className='projscroll'>
              <div id='mapshare' className='row col s12'>
                <div className='row col s12'>
                  <h3 className='tealfont raleway projtitle'>Map Share</h3>
                </div>
                <div className='projdiv row col m6 s12'>

                  <p className='raleway projtext'>
                    Built With: JavaScript | Node.js, Express.js | Angular.js | Google Maps/Directions API | Socket.io
                  </p>
                  <p className='raleway projtext'>
                    Designed to simplify meet ups with friends. Users can share the destination live and plot a unique direct route based on each invited users' current location.        </p>
                  <div className='row'>
                    <div className='col s3'>
                      <a href='https://github.com/kakuuuuuu/MapServer' target='_blank'><img className='project-link' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/github.png' alt='github' /></a>
                      <p className='project-link-label blue-grey-font center-align'>
                        GitHub
                      </p>
                    </div>
                    <div className='col s3'>
                      <a href='http://mapshare.co' target='_blank'><img className='project-link' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/www.png' alt='www' /></a>
                      <p className='project-link-label blue-grey-font center-align'>
                        Demo
                      </p>
                    </div>
                  </div>
                </div>
                <div className='projdiv container row col m6 s12 valign-wrapper'>
                  <img className='projgif valign materialboxed' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/mapshare.gif' alt='mapshare' />
                </div>
              </div>
            </li>
          </ul>
          <ul id='iosanimation'>
            <li className='projscroll'>
              <div id='mapios' className='row col s12'>
                <div className='row col s12'>
                  <h3 className='tealfont raleway projtitle'>Map Share (iOS)</h3>
                </div>
                <div className='projdiv row col m6 s12'>
                  <p className='raleway projtext'>
                    Built With: Swift | MapKit | Alamofire | Socket.io
                  </p>
                  <p className='raleway projtext'>
                    Companion app to the web version of Map Share. Shares all functionality and interactivity with the web version as well as being able to provide step-by-step directions using the built in Maps app.
                  </p>
                  <div className='row'>
                    <div className='col s3'>
                      <a href='https://github.com/kakuuuuuu/Map-Share' target='_blank'><img className='project-link waves-effect waves-light' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/github.png' alt='github' /></a>
                      <p className='project-link-label blue-grey-font center-align'>
                        GitHub
                      </p>
                    </div>
                  </div>
                </div>
                <div className='projdiv container row col m6 s12 valign-wrapper'>
                  <div className='col s6'>
                    <img className='iosimg materialboxed' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/iosmockup.png' alt='iosmapshare' />
                  </div>
                  <div className='col s6'>
                    <img className='iosimg materialboxed' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/iosmockup2.png' alt='iosmapshare' />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
    );

   }
 }
 export default Projects;

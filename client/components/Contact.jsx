import React from 'react';

class Contact extends React.Component {
   render() {
     return(
       <div id='contact' className='section row container'>
          <div className='col s12 row'>
            <h2 className='header raleway center-align'>Contact Me</h2>
            <h5 className='raleway center-align'></h5>
          </div>
          <div id='contactimgs' className='col s12 container row'>
            <div className='row col m6 s12'>
              <div className="contactdiv col s4">
                <a href='mailto:kt.fremont@gmail.com' className='contactlink' target='_blank'><img className='contactimg center-block' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/email.png' alt='mail' />
                  <p className='blue-grey-font contact-label center-align'>Email</p></a>
              </div>
              <div className="contactdiv col s4">
                <a href='https://linkedin.com/in/kyle-tsuyemura' className='contactlink' target='_blank'><img className='contactimg center-block' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/linkedin.png' alt='linkedin' />
                  <p className='blue-grey-font contact-label center-align'>LinkedIn</p></a>
              </div>
              <div className="contactdiv col s4">
                <a href='https://github.com/kakuuuuuu' className='contactlink' target='_blank'><img className='contactimg center-block' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/github.png' alt='github' />
                  <p className='blue-grey-font contact-label center-align'>GitHub</p></a>
              </div>
            </div>
            <div className='row col m6 s12'>
              <div className="contactdiv col s4">
                <a href='https://soundcloud.com/kakuuuuuuu' className='contactlink' target='_blank'><img className='contactimg center-block' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/soundcloud.png' alt='soundcloud' />
                  <p className='blue-grey-font contact-label center-align'>SoundCloud</p></a>
              </div>
              <div className="contactdiv col s4">
                <a href='https://www.youtube.com/channel/UCLfqas3JNBp3BoXEbJb3iYg' className='contactlink' target='_blank'><img className='contactimg center-block' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/youtube.png' alt='youtube' />
                  <p className='blue-grey-font contact-label center-align'>Youtube</p></a>
              </div>
              <div className="contactdiv col s4">
                <a href='https://www.dropbox.com/s/jnjv0var5ajloup/Resume.pdf?dl=0' className='contactlink' target='_blank'><img className='contactimg center-block' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/dropbox.png' alt='dropbox' />
                  <p className='blue-grey-font contact-label center-align'>Resume</p></a>
              </div>
            </div>
          </div>
        </div>
    );

   }
 }
 export default Contact;

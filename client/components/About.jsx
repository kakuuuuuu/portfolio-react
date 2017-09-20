import React from 'react';

class About extends React.Component {
   render() {
     return(
       <div id='about' className='section container row'>
        <div className='row container col s12'>
          <h2 className="header raleway">About Me</h2>
        </div>
        <div id='abouttxtdiv' className="row container abtdiv col m12 s12">
          <ul id='abouttextanimation'>
            <li className='abouttextscroll'>
              <p className="abouttext grey-text text-darken-3 lighten-3 raleway">Hello! My name is Kyle and I am a <span className='tealfont'>Full Stack Web Developer</span>, who was until recently studying Electrical Engineering at University of California, Davis. Some friends suggested I try my hand at programming as a change of pace and I instantly fell in love with it. I decided to make the transition into web development and since then I have conquered several stacks of technology. I haven't regretted that decision even for a moment and I'm eager to continue learning more!</p>
            </li>
            <li className='abouttextscroll'>
              <p className="abouttext grey-text text-darken-3 lighten-3 raleway">Aside from coding I have a large passion for music, which is also where my hobbies in dance and DJing stem from. When I'm not doing either of those, you'll probably find me playing video games.</p>
            </li>
          </ul>

        </div>
        <div id='aboutpictures' className="row container abtdiv col m12 s12 center-block">
          <div className="col m3 s6 abtpicdiv">
            <img className='about-picture materialboxed center-block' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/profile.png' alt='profile' />
          </div>
          <div className="col m3 s6 abtpicdiv">
            <img className='about-picture materialboxed center-block' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/dance.jpg' alt='dance' />
          </div>
          <div className="col m3 s6 abtpicdiv">
            <img className='about-picture materialboxed center-block' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/code.png' alt='code' />
          </div>
          <div className="col m3 s6 abtpicdiv">
            <img className='about-picture materialboxed center-block' src='https://s3-us-west-1.amazonaws.com/portfolio-kyletsuyemura/controller.jpg' alt='controller' />
          </div>
        </div>
      </div>
    );

   }
 }
 export default About;

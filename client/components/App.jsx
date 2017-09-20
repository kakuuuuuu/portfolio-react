import React from 'react';
import NavBar from './Navbar.jsx'
import MobileNav from './MobileNav.jsx'
import Banner from './Banner.jsx'
import About from './About.jsx'
import ParaOne from './parallax_one.jsx'
import Technology from './Technology.jsx'
import ParaTwo from './parallax_two.jsx'
import Projects from './Projects.jsx'
import ParaThree from './parallax_three.jsx'
import Contact from './Contact.jsx'
// import Banner from './Banner.jsx'
class App extends React.Component {
   render() {
      return (
         <div id='main'>
            <MobileNav/>
            <NavBar/>
            <Banner/>
            <About/>
            <ParaOne/>
            <Technology/>
            <ParaTwo/>
            <Projects/>
            <ParaThree/>
            <Contact/>
         </div>
      );
   }
}
export default App;

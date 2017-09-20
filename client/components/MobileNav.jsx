import React from 'react';
class MobileNav extends React.Component {
   render() {
      return (
        <ul className="side-nav blue-grey" id="mobile-demo">
          <li><p className="navlink whitefont center-align navtitle">Navigation</p></li>
          <li><div className="divider" /></li>
          <li><a className="navlink whitefont aboutbtn" href="#" onClick="$('.button-collapse').sideNav('hide');">About</a></li>
          <li><a className="navlink whitefont techbtn" href="#" onClick="$('.button-collapse').sideNav('hide');">Technology</a></li>
          <li><a className="navlink whitefont projbtn" href="#" onClick="$('.button-collapse').sideNav('hide');">Projects</a></li>
          <li><a className="navlink whitefont contactbtn" href="#" onClick="$('.button-collapse').sideNav('hide');">Contact</a></li>
        </ul>
      );
   }
}
export default MobileNav;

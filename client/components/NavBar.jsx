import React from 'react';

class NavBar extends React.Component {
   render() {
      return (
        <div className="navbar-fixed">
           <ul id="dropdown1" className="dropdown-content">
             <li><a id="getoutbtn" href="#!" className="blackfont">Get Out</a></li>
             <li><a id="forgebtn" href="#!" className="blackfont">Forge</a></li>
             <li><a id="mapsharebtn" href="#!" className="blackfont">Map Share</a></li>
             <li><a id="iosbtn" href="#!" className="blackfont">Map Share (iOS)</a></li>
           </ul>
           <nav className="noboxshadow banner-hidden">
             <div className="nav-wrapper clear">
               <a href="#" className="brand-logo raleway hide-on-med-and-down">K<span className="tealfont">Tsuyemura</span></a>
               <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">view_list</i></a>
               <ul className="right hide-on-med-and-down">
                 <li><a className="navlink blackfont aboutbtn" href="#">About <i className="material-icons left">perm_identity</i></a></li>
                 <li><a className="navlink blackfont techbtn" href="#">Technology <i className="material-icons left">settings</i></a></li>
                 <li><a className="navlink blackfont projbtn dropdown-button" href="#" data-activates="dropdown1">Projects <i className="material-icons right">arrow_drop_down</i><i className="material-icons left">mode_edit</i></a></li>
                 <li><a className="navlink blackfont contactbtn" href="#">Contact <i className="material-icons left">email</i></a></li>
               </ul>
             </div>
           </nav>
     </div>
      );
   }
}
export default NavBar;

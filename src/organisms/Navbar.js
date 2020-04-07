import React from "react";
import '../css/navbar.css';

function Navbar() { // it should be taken {title} as a parameter while sending a title
  return (
    <div className="nav1">
      <button>Logout</button>
      {/* <nav class="navbar navbar-light bg-primary">
        <span class="navbar-text">
          Navbar text with an inline element
        </span>
      </nav> */}
    </div>

  );
}

//if a title is wanted 
// //sending a title is mandatory
// Navbar.propsType = {
//     title : PropTypes.string.isRequired
// }
// //if a title is not sending in App.js when called
// Navbar.defaultProps = {
//     title : "default title"
// }

export default Navbar;
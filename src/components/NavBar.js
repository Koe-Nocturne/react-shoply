import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper cyan lighten-2">
          <a href="/" className="brand-logo center">
            Shoply
          </a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <a href="sass.html">Products</a>
            </li>
            <li>
              <a href="badges.html">Items In Cart: {this.props.cart.length}</a>
            </li>
            {/* <li><a href="collapsible.html">JavaScript</a></li> */}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;

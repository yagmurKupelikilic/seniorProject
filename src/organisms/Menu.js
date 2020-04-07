import React, { Component } from 'react'
import '../css/menu.css';
import bilsportlogo from '../images/fotos/bilsportlogo.png';

class Menu extends Component {
  render() {
    return (
      <div className="menuParts">
        <div>
          <a href=""><img className="bilsport" src={bilsportlogo} alt="bilsportlogo" /></a>
        </div>
        
        <div className="menuOptions">
        <section class="app" className="menus" >
          <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
          <aside class="sidebar">
            <header>
              {/* if admin redirect to adminHome page but if not then redirect to Homepage */}
              <p className="bilsportheader" align="center">Welcome to <br></br>BilSports</p>
              <br></br><br></br>
            </header>

          </aside>
        </section>
        </div>
      </div>
    )
  }
}

export default Menu;

import React, { useState } from 'react';
import './sidebar.css'; // Assuming you have a CSS file for styling

const Sidebar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleLinkClick = (event) => {
    const links = document.querySelectorAll('.Menulist li');
    links.forEach((link) => link.classList.remove('active'));
    event.target.parentNode.parentNode.classList.add('active');
  };

  return (
    <div className="App">
      <div className={`menuToggle ${menuActive ? 'active' : ''}`} onClick={toggleMenu}></div>
      <div className={`sidebar ${menuActive ? 'active' : ''}`}>
        <ul>
          <li className="logo" style={{ '--bg': '#672CAE' }}>
            <a href="#">
              <div className="icon">
                <ion-icon name="logo-codepen"></ion-icon>
              </div>
              <div className="text">Website Logo</div>
            </a>
          </li>
          <div className="Menulist">
            <li style={{ '--bg': '#ffa117' }} className="active" onClick={handleLinkClick}>
              <a href="#home">
                <div className="icon">
                  <ion-icon name="home"></ion-icon>
                </div>
                <div className="text">Home</div>
              </a>
            </li>
            {/* Other list items */}
          </div>
          <div className="bottom">
            <li style={{ '--bg': '#333' }}>
              <a href="#">
                <div className="icon">
                  <div className="imageBox">
                    <img src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&q=50" alt="profile" />
                  </div>
                </div>
                <div className="text">Nilima Das</div>
              </a>
            </li>
            {/* Logout item */}
          </div>
        </ul>
      </div>
      <section id="home">Home</section>
      {/* Other sections */}
      <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
    </div>
  );
}

export default Sidebar;

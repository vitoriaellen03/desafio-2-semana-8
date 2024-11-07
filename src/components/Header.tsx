import React from "react";

const Header = () => {
  return (
    <header className="c-header" id="c-header">
      <nav className="navbar columns">
        <div className="logo column">
          <a href="/">
            <img src="/img/logo.png" alt="Logo" />
            <h2 className="title">Project Manager</h2>
          </a>
        </div>

        <div className="column menu">
          <ul className="nav-menu ">
          <li><a href="/">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Profile</a></li>
            <li>
              <div className="search">
                <input type="text" placeholder="Search in site" />
                <i className="icon-search">
                  <img src="/assets/images/ic-search.png" alt="icon search" />
                </i>
              </div>
            </li>
            <li>
              <button className="btn" data-type="login" onClick={() => window.location.href = '/'}>Login</button>
            </li>
          </ul>
          <div className="hamburger default"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

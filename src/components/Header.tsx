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
            <li><a href="/settings">Settings</a></li>
            <li><a href="/profile">Profile</a></li>
            <li>
              <div className="search">
                <input type="text" placeholder="Search in site" />
                
                <i className="icon-search">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1357 15.5326C12.8152 16.6568 11.1035 17.3352 9.23341 17.3352C5.05446 17.3352 1.66675 13.9475 1.66675 9.76854C1.66675 5.58959 5.05446 2.20187 9.23341 2.20187C13.4124 2.20187 16.8001 5.58959 16.8001 9.76854C16.8001 11.6274 16.1298 13.3296 15.0178 14.6469L18.6498 18.2789L17.7659 19.1628L14.1357 15.5326ZM15.5501 9.76854C15.5501 13.2571 12.722 16.0852 9.23341 16.0852C5.74482 16.0852 2.91675 13.2571 2.91675 9.76854C2.91675 6.27994 5.74482 3.45187 9.23341 3.45187C12.722 3.45187 15.5501 6.27994 15.5501 9.76854Z" fill="white" fill-opacity="0.7" />
                  </svg>
                </i>
              </div>
            </li>
            <li>
              <button className="btn" data-type="login" onClick={() => window.location.href = '/login'}>Login</button>
            </li>
          </ul>
          <div className="hamburger default"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

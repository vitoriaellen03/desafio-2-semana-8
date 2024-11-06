import React from "react";

const Header = () => {
  return (
    <header class="c-header" id="c-header">
      <nav class="navbar columns">
        <div class="logo column">
          <a href="/">
            <img src="../public/img/logo.png" alt="Logo"/>
              <h2 class="title">Project Manager</h2>
          </a>
        </div>

        <div class="column menu">
          <ul class="nav-menu">
          </ul>
          <div class="hamburger default"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

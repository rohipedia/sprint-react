import React from "react";
import logo from '../../logo.svg';
import './Header.css';

const Header = () => {
    const welcomeMessage = `Welcome to Sprint`;
  return (
    <div className="row">
      <div className="col-3">
        <header>
          <div className="form-group">
            <img
              src="https://files.maxhub.net/uploads/sprint_allunlock-ByF2UzvjQ.png"
              alt=""
            />
          </div>
        </header>
      </div>
      <div className="col-6">
        <h3 className="sprint-welcome">{welcomeMessage}</h3>
      </div>
      <div className="col-3">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
};

export default Header;

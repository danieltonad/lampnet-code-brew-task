import React from "react";
import Button from "../../components/Button";
import "./navbar.scss";
export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar-top">
        <div className="Navbar-top-item">For Entrepreneur</div>
        <div className="Navbar-top-item">+1 929 XXXXXX</div>
        <div className="Navbar-top-item">+1 929 XXXXXX</div>
        <div className="Navbar-top-item">+1 929 XXXXXX</div>
      </div>
      <div className="Navbar-Bottom">
        <div className="Navbar-Bottom-left">
          <div className="Navbar-Bottom-left-items">Logo</div>
        </div>
        <div className="Navbar-Bottom-right">
          <div className="Navbar-Bottom-right-items">Services</div>
          <div className="Navbar-Bottom-right-items">Solutions</div>
          <div className="Navbar-Bottom-right-items">Clone Apps</div>
          <div className="Navbar-Bottom-right-items">Live Demos</div>
          <div className="Navbar-Bottom-right-items">Company</div>
          <div className="Navbar-Bottom-right-items">Portfolio</div>
          <div className="Navbar-Bottom-right-items">Resources</div>
          <div className="Navbar-Bottom-right-items">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

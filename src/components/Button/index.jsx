import React from "react";
import "./button.scss";

export default function Button({ dark = true, width = false, height = false }) {
  return (
    <div
      style={{
        backgroundColor: dark ? "#508E01" : "transparent",
        width: width || "8rem",
        height: height || "2.3rem"
      }}
      className="animi-button"
    >
      <div className="ico">
        <i className="fa fa-dot-circle fa-1x" id="dot-ico"></i>
      </div>

      <div className="text">
        Get In Touch
      </div>
    </div>
  );
}

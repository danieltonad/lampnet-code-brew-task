import React from "react";
import "./title-comp.scss";
export default function Title({
  title = "services",
  titleBold = "What’s Brewing In The Code Brew Lab?",
  titleLongText = "Discover the digital possibilities for your brand with our comprehensive suite of services",
  ico = false
}) {
  return (
    <div className="Title-Comp mt-3">
      <div className="s-title">
        <i className={ico || "fa fa-cog"} id="s-ico"></i>
        {title}
      </div>
      <div className="s-title-bold">{titleBold}</div>
      <div className="col-12">{titleLongText}</div>
    </div>
  );
}

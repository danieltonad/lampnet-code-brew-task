import React from "react";
import "./cardView.scss";
export default function CardView({
  title = "Mobile App ,Development",

  list = ["iOS App", "Andriod App", "Native App", "Hybrid App", "Web App"],
  bg = "linear-gradient(to bottom, #387AF8,#0143C0)",
  image,
}) {

    const t = title.split(',')
  return (
    <div className="cardView">
      <div
        style={{
          background: bg,
        }}
        className="card"
      >
        <div className="title mt-3">
          {t[0]}
          {
            t[1] ? (<> <br /> {t[1]}</>) : ""
          }
          <div className="ico">
            <i className="fa fa-forward fa-2x"></i>{" "}
          </div>
        </div>

        <div className="card-list mt-4">
          {list.map((e) => (
            <div className="card-list-item">{e}</div>
          ))}
        </div>
      </div>
      <div
        className="image"
      >
        <img src={image} alt="" srcset="" />
      </div>
    </div>
  );
}

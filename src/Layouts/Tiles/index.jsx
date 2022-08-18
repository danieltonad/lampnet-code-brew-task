import React from "react";
import "./tiles.scss";

export default function Tiles() {
  return (
    <div className="tiles pt-4">
      <div className="row .py-1">
        <div className="col-xl-6 col-lg-6 col-md-6 col-11">
          <div id="blockchain">
            <div className="title">Blockchain</div>
            <div className="text">
              Enhance security & transparency by creating a decentralized
              ecosystem for your brand.
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-3 col-md-6 col-11">
          {" "}
          <div id="iot">
            <div className="title">IoT</div>
            <div className="text">
              Enjoy better productivity & customer experience by minimizing
              downtime & risk factors with IoT technology.
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-3 col-md-6 col-11">
          {" "}
          <div id="crypto">
            <div className="title">Cryptocurrency</div>
            <div className="text">
              Enable fast & secure transactions using our robust & reliable
              cryptocurrency exchange solutions.
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-3 col-md-6 col-11">
          {" "}
          <div id="mkt">
            <div className="title">Marketing</div>
            <div className="text">
              Maximize the chances of your business growth & ROI with strongest
              marketing operations.
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-3 col-md-6 col-11">
          {" "}
          <div id="qa">
            <div className="title">QA</div>
            <div className="text">
              Get a bug-free & highly functional product with comprehensive
              mobile app quality assurance.
            </div>
          </div>
        </div>

        <div className="col-xl-6 col-lg-6 col-md-6 col-11">
          {" "}
          <div id="webdev">
            <div className="title">Web Development</div>
            <div className="text">
              Build the finest customer experienced with the help of highly
              customized web development.
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light py-4">
        <div className="container mx-auto empower">
          <div className="text">
            We Empower Your Business With Out-Of-The-Box Digital Solutions
          </div>
          <div className="btn">Btn</div>
        </div>
      </div>
    </div>
  );
}

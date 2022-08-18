import React from "react";
import CardView from "../../components/Cards/CardView";
import "./services.scss";
import UIUX from '../../assets/image/code-brew-ui-ux.jpg'
import Mobile from '../../assets/image/code-brew-mobile-app.png'
import Title from "../../components/Title";
import Tiles from "../Tiles";
export default function Services() {
  return (<>
    <div className="services my-5 mb-5">
      
      <Title />

      <div className="row my-3">
        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
          <CardView image={Mobile} />
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
          <CardView
            bg="linear-gradient(to bottom, #6FA825,#315700)"
            title={"UI & UX ,Design"}
            list={["Mobile & Web Design","Product Design", "Brand & Logo Design", "Prototype & Wireframe", "Visual Design"]}
            image={UIUX}
          />
        </div>
      </div>

    </div>
      <Tiles />
      </>
  );
}

import React from "react";
import "./HomeScreen.css";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import Heading from "../components/Heading/Heading";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Fade>
        <div className="homeScreen__top">
          <h4>
            We're working hard to put the health and well-being of our partners
            and customers first in all that we do. <Link>Learn more</Link>
          </h4>
        </div>
      </Fade>

      <Fade>
        <div className="homeScreen__bottom">
          <div className="homeScreen__bottomLeft">
            <h4>Investing in our communities</h4>
            <p>
              The Starbucks Foundation awarded grants to over 400 nonprofits
              serving communities of color. Recipients were nominated by
              Starbucks partners (employees).
            </p>
            <button>Learn more</button>
          </div>
          <div className="homeScreen__bottomRight">
            <img
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-68026.jpg"
              alt="pic"
            />
          </div>
        </div>
      </Fade>

      <Fade>
          <Heading heading="TODAY IS YOURS" />
      </Fade>
    </div>
  );
}

export default HomeScreen;

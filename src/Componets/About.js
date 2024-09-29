import React from "react";
import "./about.css";
import secondImg1 from "../Images/SecondImage1.png";
import Cart1 from "../Images/CRT23.png";
import Cart2 from "../Images/CRT22.png";
import Cart3 from "../Images/CRT21.png";
import bg from "../Images/aboutback.png";
import Foter from "./Foter";
function About() {
  return (
    <>
      <div className="ALL-CONTENT">
        <div className="cont">
          <div className="demo">
            <h1>
              About Us <span style={{ color: "#E85C0D" }}>Honey</span>
            </h1>
          </div>
          <div className="second-part-top1">
            <div className="second-part-image11">
              <img src={secondImg1} alt="" />
            </div>
            <div className="second-part-text1">
              <h2>Information</h2>
              <h1>About Honey</h1>
              <div>
                <p>
                  Over its history as a food, the main uses of honey are in
                  cooking, baking, desserts, as a spread on bread, as an
                  addition to various beverages such as tea, and as a sweetener
                  in some commercial beverages.
                </p>
                <p>
                  Due to its energy density, honey is an important food for
                  virtually all hunter-gatherer cultures in warm climates, with
                  the Hadza people ranking honey as their favorite food.
                </p>
              </div>
            </div>
            <div className="second-part-image21">
              <img src={secondImg1} alt="" />
            </div>
          </div>
          <div className="Cards">
            <div className="card">
              <div className="card-Image">
                <img src={Cart1} alt="" />
              </div>
              <div className="description">
                <h4>Honey production</h4>
                <p>
                  The quality of honey is our pride. But if you do not like the
                  product, we will refund your money.We have been producing
                  honey for many years and we are undeniably proud of the
                  quality of our products.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-Image">
                <img src={Cart2} alt="" />
              </div>
              <div className="description">
                <h4>Beekeeping course</h4>
                <p>
                  Everything you need to know about beekeeping in our
                  overwhelming online course.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-Image">
                <img src={Cart3} alt="" />
              </div>
              <div className="description">
                <h4>Swarm removing </h4>
                <p>
                  We also provide a service for removing bee swarms. Just give
                  us a call and we will deal with it right away.
                </p>
              </div>
            </div>
          </div>
          <div className="IMG_CONTN">
            <div className="aboutimg">
              <img src={bg} alt="" />
            </div>
            <div className="CONTANT">
              <h1>
                About Our <span style={{ color: "#E85C0D" }}>Company</span>
              </h1>
              <div>
                <p>
                  Our company was founded in 2001. Our honey is 100% natural. We
                  bring to you honey straight from the hive, unheated,
                  unprocessed, unpasteurized.
                </p>

                <p>
                  We have been producing honey for many years and we are
                  undeniably proud of the quality of our products.
                </p>
                <p>
                  The term beekeeper refers to a person who keeps honey bees in
                  beehives, boxes, or other receptacles. The beekeeper does not
                  control the creatures. The beekeeper owns the hives or boxes
                  and associated equipment. The bees are free to forage or leave
                  as they desire.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Foter />
      </div>
    </>
  );
}

export default About;

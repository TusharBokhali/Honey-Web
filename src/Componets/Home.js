import React from "react";
import "./Css/Home.css";
import FC2 from "../Images/C2.jpeg";
import full from "../Images/threeFull.png";
import honey from "../Images/Honey.jpg";
import secondImg1 from "../Images/SecondImage1.png";
import CardI1 from '../Images/CardIM1.png'
import CardI2 from '../Images/CardsIM2.png'
import CardI3 from '../Images/CardIM3.png'

function Home() {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="Top-Content">
            <div className="First-Text">
              <h1>SWEET ORGANIC HONEY </h1>
              <p>
                Pure honey is a natural product that's dense, has a soft
                texture, and a sweet aroma. It's made from honey that's been
                filtered to remove dirt, pollen, and dead bees, and it doesn't
                contain added sweeteners, oils, or flavors.
              </p>
              <div style={{ textAlign: "left" }}>
                <button>View Products</button>
              </div>
              <div className="full">
                <img src={full} alt="" />
              </div>
            </div>
            <div className="First-Images">
              <img src={FC2} alt="" />
            </div>
          </div>
          <div className="second-part-top">
            <div className="second-part-image1">
              <img src={secondImg1} alt="" />
            </div>
            <div className="second-part-text">
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
            <div className="second-part-image2">
              <img src={secondImg1} alt="" />
            </div>
          </div>
          <div className="AboutUs">
            <div className="setPara">
              <h2>About Us</h2>
              <p>Our company was founded in 2001. Our honey is 100% natural. We bring to you honey straight from the hive, unheated, unprocessed, unpasteurized.</p>
            </div>
            <div className="Cards">
              <div className="card">
                <div className="card-Image">
                  <img src={CardI1} alt="" />
                </div>
                <div className="description">
                  <h4>Quality assurance</h4>
                  <p>The quality of honey is our pride. But if you do not like the product, we will refund your money.</p>
                </div>
              </div>

              <div className="card">
                <div className="card-Image">
                  <img src={CardI2} alt="" />
                </div>
                <div className="description">
                  <h4>Easy to order</h4>
                  <p>You can select the product you are interested in and add to the cart. Or just call us!</p>
                </div>
              </div>

              <div className="card">
                <div className="card-Image">
                  <img src={CardI3} alt="" />
                </div>
                <div className="description">
                  <h4>Fast shipping</h4>
                  <p>We are working only with the best delivery services. You can be sure our honey will be delivered to you safe and sound.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

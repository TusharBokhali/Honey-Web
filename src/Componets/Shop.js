import React from "react";
import "./Shop.css";
import SHOPALL from "./SHOPALL";
import Pro1 from "../Images/AllProduct1.png";
import Pro2 from "../Images/AllProduct2.png";
import Pro3 from "../Images/AllProduct3.png";
import Pro4 from "../Images/AllProduct4.png";
import Pro5 from "../Images/AllProduct5.png";
import Pro6 from "../Images/AllProduct6.png";
import F1 from "../Images/F1.png";
import F2 from "../Images/F2.png";
import F3 from "../Images/F3.png";
import F4 from "../Images/F4.png";
import F5 from "../Images/F5.png";
import F6 from "../Images/F6.png";
import Foter from "./Foter";

function Shop() {
  return (
    <>
      <div className="shopmain125">
        <div className="ShopContent125">
          <div className="ContentsShop125">
            <h1 style={{ color: "#E85C0D" }}>Shop</h1>
          </div>
          <div className="compo125">
            <SHOPALL />
          </div>
          <div className="Product-Description125" style={{margin:'0'}}>
            <div className="p-description125">
              <h1>
                Box <span style={{ color: "#E85C0D" }}>Fresh</span> Honey
              </h1>
              <p>
                Honey is a syrupy liquid that honeybees make from plant nectar.
                Loved worldwide for its sweetness and depth of flavor, it’s used
                in many foods and recipes.
              </p>
            </div>
            <div className="All-product125">
              <div className="products125">
                <div className="img125">
                  <img src={F1} alt="" />
                </div>
                <div className="price125">
                  <h3>Himaliyan Honey</h3>
                  <p style={{ color: "#B83806", fontWeight: "500" }}>
                    $130.00-$220.00
                  </p>
                </div>
              </div>

              <div className="products125">
                <div className="img125">
                  <img src={F2} alt="" />
                </div>
                <div className="price125">
                  <h3>Lychee Honey</h3>
                  <p style={{ color: "#B83806", fontWeight: "500" }}>
                    $110.00-$140.00
                  </p>
                </div>
              </div>

              <div className="products125">
                <div className="img125">
                  <img src={F3} alt="" />
                </div>
                <div className="price125">
                  <h3>Turube Honey</h3>
                  <p style={{ color: "#B83806", fontWeight: "500" }}>
                    $120.00-$130.00
                  </p>
                </div>
              </div>

              <div className="products125">
                <div className="img125">
                  <img src={F4} alt="" />
                </div>
                <div className="price125">
                  <h3>Red Honey</h3>
                  <p style={{ color: "#B83806", fontWeight: "500" }}>
                    $220.00-$300.00
                  </p>
                </div>
              </div>

              <div className="products125">
                <div className="img125">
                  <img src={F5} alt="" />
                </div>
                <div className="price125">
                  <h3>Raw Honey</h3>
                  <p style={{ color: "#B83806", fontWeight: "500" }}>
                    $420.00-$503.00
                  </p>
                </div>
              </div>

              <div className="products125">
                <div className="img125">
                  <img src={F6} alt="" />
                </div>
                <div className="price125">
                  <h3>Medow Honey</h3>
                  <p style={{ color: "#B83806", fontWeight: "500" }}>
                    $502.00-$850.00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="margins">
          <Foter />
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;

import React from "react";
import "./sortest.css";
import Pro1 from "../Images/AllProduct1.png";
import Pro2 from "../Images/AllProduct2.png";
import Pro3 from "../Images/AllProduct3.png";
import Pro4 from "../Images/AllProduct4.png";
import Pro5 from "../Images/AllProduct5.png";
import Pro6 from "../Images/AllProduct6.png";

function SHOPALL() {
  return (
    <>
      <div className="sort">
      <div className="Product-Description1209">
                        <div className="p-description">
                            <h1>
                                100% <span style={{ color: "#E85C0D" }}>Fresh</span> Honey
                            </h1>
                            <p>
                                Honey is a syrupy liquid that honeybees make from plant nectar.
                                Loved worldwide for its sweetness and depth of flavor, it’s used
                                in many foods and recipes.
                            </p>
                        </div>
                        <div className="All-product">
                            <div className="products">
                                <div className="img">
                                    <img src={Pro1} alt="" />
                                </div>
                                <div className="price">
                                    <h3>Mango Flower Honey</h3>
                                    <p style={{ color: "#B83806", fontWeight: "500" }}>
                                        $100.00-$22.00
                                    </p>
                                </div>
                            </div>

                            <div className="products">
                                <div className="img">
                                    <img src={Pro2} alt="" />
                                </div>
                                <div className="price">
                                    <h3>Raw Honey</h3>
                                    <p style={{ color: "#B83806", fontWeight: "500" }}>
                                        $120.00-$25.00
                                    </p>
                                </div>
                            </div>

                            <div className="products">
                                <div className="img">
                                    <img src={Pro3} alt="" />
                                </div>
                                <div className="price">
                                    <h3>Manuka Honey</h3>
                                    <p style={{ color: "#B83806", fontWeight: "500" }}>
                                        $100.00-$23.00
                                    </p>
                                </div>
                            </div>

                            <div className="products">
                                <div className="img">
                                    <img src={Pro4} alt="" />
                                </div>
                                <div className="price">
                                    <h3>Queen Bee Honey</h3>
                                    <p style={{ color: "#B83806", fontWeight: "500" }}>
                                        $99.00-$25.00
                                    </p>
                                </div>
                            </div>

                            <div className="products">
                                <div className="img">
                                    <img src={Pro5} alt="" />
                                </div>
                                <div className="price">
                                    <h3>Seed Flower Honey</h3>
                                    <p style={{ color: "#B83806", fontWeight: "500" }}>
                                        $98.00-$22.00
                                    </p>
                                </div>
                            </div>

                            <div className="products">
                                <div className="img">
                                    <img src={Pro6} alt="" />
                                </div>
                                <div className="price">
                                    <h3>Pure Hill Honey</h3>
                                    <p style={{ color: "#B83806", fontWeight: "500" }}>
                                        $100.00-$22.00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            
      </div>
    </>
  );
}

export default SHOPALL;

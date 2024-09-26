import React from "react";
import "./Css/Center.css";
import Pro1 from "../Images/AllProduct1.png";
import Pro2 from "../Images/AllProduct2.png";
import Pro3 from "../Images/AllProduct3.png";
import Pro4 from "../Images/AllProduct4.png";
import Pro5 from "../Images/AllProduct5.png";
import Pro6 from "../Images/AllProduct6.png";
import Cole1 from "../Images/Collection1.png";
import Cole2 from "../Images/Collection2.png";
import Cole3 from "../Images/Collection3.png";
import Cole4 from "../Images/Collection4.png";
import Profile1 from '../Images/Profile1.png'
import Previews from '../SVG/Previews.svg'
import Next from '../SVG/Next.svg'
import Nuture1 from '../Images/Nature1.png'
import Nuture2 from '../Images/Nature2.png'
import Nuture3 from '../Images/Nature3.png'
import Nuture4 from '../Images/Nature4.png'
import Nuture5 from '../Images/Nature5.png'
function Center() {
    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="Product-Description">
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
                    <div className="Honey-Collection">
                        <div className="content-Font">
                            <h3>
                                <span style={{ color: "#E85C0D" }}>Honey</span> Collection
                            </h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry has been the industry's standard consectetur
                                adipisicing elit.
                            </p>
                        </div>
                        <div className="All-product">
                            <div className="products">
                                <div className="img">
                                    <img src={Cole1} alt="" />
                                </div>
                                <div className="price">
                                    <h3>Queen Bee Honey</h3>
                                    <p style={{ color: "#B83806", fontWeight: "500" }}>
                                        HEALTHY FOOD
                                    </p>
                                </div>
                            </div>

                            <div className="products">
                                <div className="img">
                                    <img src={Cole2} alt="" />
                                </div>
                                <div className="price">
                                    <h3>Seed Flower Honey</h3>
                                    <p style={{ color: "#B83806", fontWeight: "500" }}>
                                        HEALTHY FOOD
                                    </p>
                                </div>
                            </div>

                            <div className="products">
                                <div className="img">
                                    <img src={Cole3} alt="" />
                                </div>
                                <div className="price">
                                    <h3>Manuka Honey</h3>
                                    <p style={{ color: "#B83806", fontWeight: "500" }}>
                                        HEALTHY FOOD
                                    </p>
                                </div>
                            </div>

                            <div className="products">
                                <div className="img">
                                    <img src={Cole4} alt="" />
                                </div>
                                <div className="price">
                                    <h3>Pure Hill Honey</h3>
                                    <p style={{ color: "#B83806", fontWeight: "500" }}>
                                        HEALTHY FOOD
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="Reviews-main">
                            <div className="Revies-Text">
                                <h1 style={{ textAlign: 'center' }}>Our Happy <span style={{ color: '#E85C0D' }}>Customers</span></h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard consectetur adipisicing elit.</p>
                            </div>
                            <div className="Profile-Details">
                                <div className="Detail">
                                    <h2 style={{ color: 'black', marginBottom: '20px' }}>Justin Fisher</h2>
                                    <h4 style={{ color: '#E85C0D' }}>Student</h4>
                                    <p>Donec sodales metus arcu. Vestibulum lobortis, sem malesuada pulvinar mollis, justo tortor porta massa, et posuere leo tortor at felis. Sed placerat auctor felis ac rhoncus.</p>
                                </div>
                                <div className="Profile">
                                    <img src={Profile1} alt="" />
                                </div>
                            </div>
                            <h4>
                                <button>View More</button>
                            </h4>
                        </div>
                        <div className="slider-button">
                            <div>
                                <button><img src={Previews} alt="" /></button>
                            </div>
                            <div>
                                <button>
                                    <img src={Next} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="Nature">
                            <div className="natureImage">
                                <img src={Nuture1} alt="" />
                            </div>

                            <div className="natureImage">
                                <img src={Nuture2} alt="" />
                            </div>

                            <div className="natureImage">
                                <img src={Nuture3} alt="" />
                            </div>

                            <div className="natureImage">
                                <img src={Nuture4} alt="" />
                            </div>

                            <div className="natureImage">
                                <img src={Nuture5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Center;
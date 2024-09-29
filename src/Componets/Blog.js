import React from "react";
import "./Css/Blog.css";
import Previews from "../SVG/Previews.svg";
import Next from "../SVG/Next.svg";
import Profile1 from "../Images/Profile1.png";
import RE1 from '../Images/revies2.png'
import RE2 from '../Images/review1.png'
import Foter from './Foter'
function Blog() {
  return (
    <>
      <div className="BlogMain">
        <div className="container">
          <div className="Blog-section">
            <h1 style={{ color: "#E85C0D" }}>Blog</h1>
          </div>
          <div className="Blog-Review">
            <h1>
              Our Happy <span style={{ color: "#E85C0D" }}>Customers</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry has been the industry's standard consectetur adipisicing
              elit.
            </p>
          </div>
          <div className="ComponetBlogs">
            <div className="Profile-Details">
                <div className="Detail">
                    <h2 style={{ color: "black", marginBottom: "20px" }}>
                    Justin Fisher
                    </h2>
                    <h4 style={{ color: "#E85C0D" }}>Student</h4>
                    <p>
                        Donec sodales metus arcu. Vestibulum lobortis, sem malesuada
                        pulvinar mollis, justo tortor porta massa, et posuere leo
                        tortor at felis. Sed placerat auctor felis ac rhoncus.
                    </p>
                </div>
               <div className="Profile">
                    <img src={Profile1} alt="" />
              </div>
            </div>
          </div>
          <div className="slider-button">
            <div>
              <button>
                <img src={Previews} alt="" />
              </button>
            </div>
            <div>
              <button>
                <img src={Next} alt="" />
              </button>
            </div>
          </div>

          <div className="ComponetBlogs">
            <div className="Profile-Details">
                <div className="Detail">
                    <h2 style={{ color: "black", marginBottom: "20px" }}>
                    Joniy Mona  
                    </h2>
                    <h4 style={{ color: "#E85C0D" }}>Developer</h4>
                    <p>
                    Suspendisse potenti. Vestibulum luctus justo sed nibh interdum, nec mollis sem convallis. Sed placerat sem ante, ut aliquam mauris lacinia ac. Praesent in diam eros.
                    </p>
                </div>
               <div className="Profile">
                    <img src={RE1} alt="" />
              </div>
            </div>
          </div>
          <div className="slider-button">
            <div>
              <button>
                <img src={Previews} alt="" />
              </button>
            </div>
            <div>
              <button>
                <img src={Next} alt="" />
              </button>
            </div>
          </div>

          <div className="ComponetBlogs">
            <div className="Profile-Details">
                <div className="Detail">
                    <h2 style={{ color: "black", marginBottom: "20px" }}>
                    Lila Anderson
                    </h2>
                    <h4 style={{ color: "#E85C0D" }}>Barista</h4>
                    <p>
                    Mauris iaculis erat eu libero scelerisque, vel consequat justo varius. Duis dapibus leo tempus lectus tempor, id ullamcorper lacus dignissim.
                    </p>
                </div>
               <div className="Profile">
                    <img src={RE2} alt="" />
              </div>
            </div>
            <h4 style={{ textAlign: "center" }}>
              <button>View More</button>
            </h4>
          </div>
          <div className="slider-button">
            <div>
              <button>
                <img src={Previews} alt="" />
              </button>
            </div>
            <div>
              <button>
                <img src={Next} alt="" />
              </button>
            </div>
          </div>
          <Foter />
        </div>
      </div>
    </>
  );
}

export default Blog;

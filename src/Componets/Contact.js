import React from "react";
import "./Contact.css";
import Time1 from "../Images/Time1.png";
import Time2 from "../Images/Time2.png";
import Time3 from "../Images/Time3.png";
import LOGO from "../Images/Main_Logo.png";
import Next from "../SVG/Next.svg";
import Foter from "./Foter";
import Center from "./Center";
function Contact() {
  return (
    <>
      <div className="Cont250">
        <div className="Cont-Contai250">
          <div className="Top250">
            <h1 style={{ color: "#E85C0D",}}>Contact</h1>
          </div>
          {/* ============================= Start ===========================*/}
          <div className="Contact-List250">
            <div className="All-Timing250">
              <div className="flex250">
                <div className="timing1250">
                  <div className="TimeImage250">
                    <img src={Time1} alt="" />
                  </div>
                  <div>
                    <h2 style={{ color: "black" }}>9.30 am - 8.00 pm</h2>
                    <p
                      style={{
                        textAlign: "center",
                        margin: "10px",
                        color: "#0000009C",
                      }}
                    >
                      Working Hours
                    </p>
                  </div>
                </div>

                <div className="timing1250">
                  <div className="TimeImage250">
                    <img src={Time2} alt="" />
                  </div>
                  <div>
                    <h2 style={{ color: "black" }}>(+91) 9016398259</h2>
                    <p
                      style={{
                        textAlign: "center",
                        margin: "10px",
                        color: "#0000009C",
                      }}
                    >
                      Call Us Now
                    </p>
                  </div>
                </div>

                <div className="timing1250">
                  <div className="TimeImage250">
                    <img src={Time3} alt="" />
                  </div>
                  <div>
                    <h2 style={{ color: "black" }}>Honey Bee</h2>
                    <p
                      style={{
                        textAlign: "center",
                        margin: "10px",
                        color: "#0000009C",
                      }}
                    >
                      Get Directions
                    </p>
                  </div>
                </div>
              </div>
              <div className="Form250">
                <h1 style={{margin:'10px 0'}}>Get in touch</h1>
                <p>Our friendly team would love to hear from you.</p>
                <div className="ALL-INPUTS250">
                <div className="Personal250">

                  <div>
                    <label htmlFor="Name">First name</label>
                    <div>
                      <input type="text" id="Name" placeholder="First name"/>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="Name">Last name</label>
                    <div>
                      <input type="text" id="Name" placeholder="Last name"/>
                    </div>
                  </div>
                </div>
                <div>
                      <label htmlFor="Email">Email</label>
                      <div>
                        <input type="email"  id="Email" placeholder="@Honeybee.com"/>
                      </div>
                </div>
                <div>
                      <label htmlFor="Phone">Phone</label>
                      <div>
                        <input type="number"  id="Phone" placeholder="+91 000-000-0000" />
                      </div>
                </div>
                <div>
                    <label htmlFor="MSG">Massage</label>
                    <div>
                        <textarea  id="MSG" rows={10} cols={78}></textarea>
                    </div>
                </div>
                <div style={{display:'flex'}}>
                    <input type="checkbox"  id="Check" />
                    <p style={{marginLeft:'10px'}}>You agree to our friendly <span style={{textDecoration:'underline'}}>privacy policy</span>.</p>
                </div>
                <div>
                <button>Send message</button>
                </div>
                </div>
              </div>
            </div>
            {/* =========================== End======================================== */}
            <footer>
              <div className="footer-25250">
                <div className="log250">
                  <img src={LOGO} alt="" />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and has the
                    industry's standard consectetur adipisicing elit.
                  </p>
                </div>
              </div>

              <div className="footer-25250">
                <h2>Menu</h2>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Shop</li>
                  <li>Pages</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
              </div>

              <div className="footer-25250">
                <div className="pad250">
                  <h2>Contact</h2>
                  <p>303Honey Bee Farm Uttar Pradesh</p>
                  <h3>
                    <span style={{ color: "#0000009C", marginRight: "10px" }}>
                      Call Us:
                    </span>
                    9016398259
                  </h3>
                  <h3>Social Media</h3>
                  <div className="social250"></div>
                </div>
              </div>

              <div className="footer-25250">
                <h2>Newsletter</h2>
                <div className="inputss250">
                  <input type="text" placeholder="Your E-mail" />
                  <button>
                    <img src={Next} alt="" />
                  </button>
                </div>
                <p style={{ marginTop: "30px" }}>
                  Sign up with your email address to receive news and updates
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

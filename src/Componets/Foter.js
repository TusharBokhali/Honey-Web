import React from "react";
import Time1 from '../Images/Time1.png'
import Time2 from '../Images/Time2.png'
import Time3 from '../Images/Time3.png'
import LOGO from '../Images/Main_Logo.png'
import Next from '../SVG/Next.svg'
import Footer from '../Componets/Footer.css'
function Foter() {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="Contact-List">
            <div className="Contac-First">
              <h1>
                My <span style={{ color: "#E85C0D" }}>Contact</span>
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry has been the industry's standard consectetur
                adipisicing elit.
              </p>
            </div>
            <div className="All-Timing">
                <div className="timing1">
                    <div className="TimeImage">
                        <img src={Time1} alt="" />
                    </div>
                    <div>
                        <h2 style={{color:'black',margin:'20px'}}>9.30 am - 8.00 pm</h2>
                        <p style={{textAlign:'center',margin:'50px 0',color:'#0000009C'}}>Working Hours</p>
                    </div>
              
                </div>

                <div className="timing1">
                    <div className="TimeImage">
                        <img src={Time2} alt="" />
                    </div>
                    <div>
                        <h2 style={{color:'black'}}>(+91) 9016398259</h2>
                        <p style={{textAlign:'center',margin:'10px',color:'#0000009C'}}>Call Us Now</p>
                    </div>
                    
                </div>

                <div className="timing1">
                    <div className="TimeImage">
                        <img src={Time3} alt="" />
                    </div>
                    <div>
                        <h2 style={{color:'black'}}>Honey Bee</h2>
                        <p style={{textAlign:'center',margin:'10px',color:'#0000009C'}}>Get Directions</p>
                    </div>

               
                </div>
            </div>

            <footer>
                <div className="footer-25">
                        <div className="log">
                            <img src={LOGO} alt="" />
                            <p>Lorem Ipsum is simply dummy text of the printing and has the industry's standard consectetur adipisicing elit.</p>
                        </div>
                </div>

                <div className="footer-25">
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

                <div className="footer-25">
                <div className="pad">
                        <h2>Contact</h2>
                        <p>303Honey Bee Farm Uttar Pradesh</p>
                        <h3><span style={{color:'#0000009C',marginRight:'10px'}}>Call Us:</span>9016398259</h3>
                        <h3>Social Media</h3>
                        <div className="social">

                        </div>
                </div>
                </div>

                <div className="footer-25">
                        <h2>Newsletter</h2>
                       <div className="inputss">
                            <input type="text" placeholder="Your E-mail"/>
                            <button>
                                <img src={Next} alt="" />
                            </button>
                       </div>
                            <p style={{marginTop:'30px'}}>Sign up with your email address to receive news and updates</p>
                </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Foter;
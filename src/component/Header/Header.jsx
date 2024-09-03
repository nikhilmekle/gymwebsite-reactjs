import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";
export default function Header() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}

          onClick={()=>setMenuOpened(true)}
        >
          <img src={Bars} alt="" style={{ width: "1.5rem", height: "1rem" }} />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
          <Link to="home"
             onClick={()=>setMenuOpened(false)}
            span={true}
            smooth={true}>Home</Link>
            </li>

          <li>
          <Link to="programs"
             onClick={()=>setMenuOpened(false)}
            span={true}
            smooth={true}>Programs</Link>
            </li>
          <li>
          <Link to="Reasons"
             onClick={()=>setMenuOpened(false)}
            span={true}
            smooth={true}>Why us</Link>
            </li>
          <li>
          <Link to="plans"
             onClick={()=>setMenuOpened(false)}
            span={true}
            smooth={true}>Plans</Link></li>
          <li>
            <Link to="Testimonials"
             onClick={()=>setMenuOpened(false)}
            span={true}
            smooth={true}>Testimonials</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

import React from "react";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from 'number-counter'
import Header from "../Header/Header";
import { motion } from "framer-motion";

export default function Hero() {
  const transition = { type: "spring", duration: 2 };
  const mobile = window.innerWidth<=768 ? true : false;
  return (
    <div className="hero" id='home'>
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left:mobile ? "160px": "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span style={{textTransform:'lowercase'}}>
              IN HERE WE WILL HELP YOU TO SHAPE YOUR IDEAL BODY AND LIVE UP YOUR
              LIFE TO FULLEST
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140}  start={100} delay='4' preFix ="+"/>
            </span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>
            <NumberCounter end={978}  start={800} delay='4' preFix ="+"/>
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
            <NumberCounter end={50}  start={0} delay='4' preFix ="+"/>
            </span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
          transition={{ ...transition , type:'tween' }}
          initial={{ right: "-2rem" }}
          whileInView={{ right: "4rem" }}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img 
        initial={{right:'11rem'}}
        whileInView={{right:'20rem'}}
        transition={{...transition , type:'tween' }}
        src={hero_image_back} alt="" className="hero-image-back" />

        {/* calories */}
        <motion.div
        transition={{ ...transition , type:'tween'}}
        initial={{ right: "37rem" }}
        whileInView={{ right: "28rem" }}
         className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

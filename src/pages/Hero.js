import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll';
import Imu from '../assets/imu.png';

const Hero = () => (
  <div className="hero" id="home">
    <div className="hero-overlay">
      <div className="description">
        <h2 className="title">hELLO. i aM CHEPKOECH</h2>
        <h3 className="tagline">Mastering keyboards and shaping pixels since 2021</h3>
        <p className="paragraph">Crafting digital wonders, code sorcerer, pixel wizard, tech tamer, bug whisperer, creating software dreams with a sprinkle of charm.</p>
        <div className="hero-btns">
          <button className="hire-me">
            <a href="https://drive.google.com/file/d/1RIQlxcFspH89xvugEeEyvgSG_ABMX3rI/view?usp=drive_link" target="_blank" rel="noreferrer">
              GET MY CV
            </a>
          </button>
          {/* <button className="lets-talk">
            <Link spy smooth offset={50} duration={500} to="contact">
              LET'S TALK
            </Link>
          </button> */}
        </div>
      </div>
      <img src={Imu} alt="chepkoech" className="hero-image" />
    </div>
    <div className="social-icons">
        <a href="https://github.com/fay-simotwo" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github" />
        </a>
        <a href="https://www.linkedin.com/in/faith-chepkoech" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin-in" />
        </a>
        <a href="https://www..com/prantalks" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-insagram" />
        </a>
      </div>
  </div>
);

export default Hero;

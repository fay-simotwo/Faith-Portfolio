import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="contact" id="contact">
    <div className="footer-right">
      <h3>I'M ALWAYS INTERESTED ABOUT</h3>
      <div className="interests">
        <p>Frontend Development</p>
        <p>React</p>
        <p>Backend Development</p>
        <p>Startups</p>
        <p>New Opportunities</p>
       
      </div>

      <hr />

      <h3>
        MINDING A PROJECT?
        <span><a href="chepfaith18@gmail.com">cOnTaCt mE</a></span>
      </h3>

      <hr />

      <div className="social">
        <span><a href="https://github.com/fay-simotwo" target="_blank" rel="noreferrer">GITHUB</a></span>
        <span>
          {' '}
          <a href="https://www.linkedin.com/in/faith-chepkoech-99280a27b/" target="_blank" rel="noreferrer">LINKEDIN</a>
        </span>
        <span>
          {' '}
        </span>
      </div>
    </div>
  </div>
);

export default Contact;

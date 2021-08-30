import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-nav">
            <ul className="footer-nav-list">
              <Link to="/" className="footer-nav-item font-hover">
                TOP
              </Link>
              <Link to="/items/concept" className="footer-nav-item font-hover">
                CONCEPT
              </Link>
              <Link to="/items/menu" className="footer-nav-item font-hover">
                MENU
              </Link>
              <Link to="/items/event" className="footer-nav-item font-hover">
                EVENT
              </Link>
              <Link to="/items/access" className="footer-nav-item font-hover">
                ACCESE
              </Link>
              <Link to="/items/contact" className="footer-nav-item font-hover">
                CONTACT
              </Link>
            </ul>
          </div>
          <p className="footer-info">
            〒000-0000 大阪府〇〇市〇〇町00-00 tel./fax. 000-0000-0000
            JR大阪駅より徒歩0分
          </p>
          <p className="footer-copyright">
            Copyright 2021 Cafe MON. All rights reserved
          </p>
        </div>
        <div className="footer-right">
          <a href="000-0000-0000" className="footer-tell">
            TELL:000-0000-0000
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

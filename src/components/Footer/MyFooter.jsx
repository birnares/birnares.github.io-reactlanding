// eslint-disable-next-line no-unused-vars
import React from "react";
import vk from "../../assets/images/icons/vk.svg";
import instagram from "../../assets/images/icons/instagram.svg";
import twitter from "../../assets/images/icons/twitter.svg";
import gitHub from "../../assets/images/icons/gitHub.svg";
import linkedIn from "../../assets/images/icons/linkedIn.svg";
import "./Footer.css";

const MyFooter = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item">
                <a href="#!">
                  <img src={vk} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src={instagram} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src={twitter} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src={gitHub} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src={linkedIn} alt="Link" />
                </a>
              </li>
            </ul>
            <div className="copyright">
              <p>© 2023</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MyFooter;

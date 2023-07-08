import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span >
           ShopZen is the best online destination for secure and reliable shopping platform. Our seamless navigation, detailed product descriptions, and customer reviews help you make informed decisions.
           
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span >
          We value your feedback and are here to assist you. If you have any questions, comments, or need assistance with your order, please don't hesitate to get in touch with us. Our dedicated customer support team is available to help you.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">ShopZen</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

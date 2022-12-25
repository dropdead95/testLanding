import React from "react";

import style from "./Footer.module.css";
import Logo from "../Ui/Logo/Logo";

const Footer = () => {
  return (
    <section className={style.footer}>
      <div className={style.footerContainer + " " + "container"}>
        <div className={style.logoBlock}>
          <Logo />
          <p className={style.copyright}>Copyright 2021. Antools</p>
          <p className={style.desc}>
            Antool is a web collection of information on paid or free Design and
            Development tools
          </p>
        </div>
        <div className={style.contactBlock}>
          <h3 className={style.title}>Contact Us</h3>
          <p className={style.descTitle}>+621987463</p>
          <p className={style.descTitle}>M Building, No.10 A</p>
          <a className={style.descTitle} href="#">
            antools@awesome.com
          </a>
        </div>
        <div className={style.categoriesBlock}>
          <h3 className={style.title}>Categories</h3>
          <a className={style.descTitle} href="#">
            Design
          </a>
          <a className={style.descTitle} href="#">
            Development
          </a>
        </div>
        <div className={style.infoBlock}>
          <h3 className={style.title}>Company Info</h3>
          <a className={style.descTitle} href="#">
            About Us
          </a>
          <a className={style.descTitle} href="#">
            Our Partners
          </a>
          <a className={style.descTitle} href="#">
            Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;

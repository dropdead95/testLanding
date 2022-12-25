import React from "react";

import style from "./TopSection.module.css";
import illustration from "../../assets/Illustration.png";
import search from "../../assets/search.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
const TopSection = () => {
  return (
    <section>
      <div className={style.topSectionContainer + " " + "container"}>
        <div className={style.content}>
          <h1 className={style.title}>
            Awesome tools for Designer & Developer<span>.</span>
          </h1>
          <h3 className={style.subtitle}>
            Antool is a web collection of information on paid or free Design and
            Development tools
          </h3>
          <div className={style.inputWrapper}>
            <img src={search} alt="search" />
            <input
              className={style.input}
              placeholder="find more than 430+ tools..."
              type="text"
            />
            <button className={style.btn}>Search</button>
          </div>
          <div className={style.social}>
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="#">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
          </div>
        </div>
        <div className={style.imageBlock}>
          <img className={style.image} src={illustration} alt="illustration" />
        </div>
      </div>
    </section>
  );
};

export default TopSection;

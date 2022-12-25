import React from "react";

import logo from "../../../assets/logo-header.png";
import style from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={style.logo}>
      <img className={style.logoIcon} src={logo} alt="logo" />
      <p className={style.textLogo}>antools.</p>
    </div>
  );
};

export default Logo;

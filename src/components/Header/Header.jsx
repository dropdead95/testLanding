import React from "react";

import arrow from "../../assets/arrow.svg";
import style from "./Header.module.css";
import Logo from "../Ui/Logo/Logo";

const Header = () => {
  return (
    <header>
      <div className={style.headerContainer + " " + "container"}>
        <Logo />
        <nav className={style.headerMenu}>
          <ul className={style.menu}>
            <li className={style.menuItem}>
              <a className={style.menuLink} href="#">
                Home
              </a>
            </li>
            <li className={style.menuItem}>
              <a className={style.menuLink} href="#">
                Categories
                <img className={style.arrowMenu} src={arrow} alt="arrow" />
              </a>
            </li>
            <li className={style.menuItem}>
              <a className={style.menuLink} href="#">
                My Collections
              </a>
            </li>
            <li className={style.menuItem}>
              <a className={style.menuLink} href="#">
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className={style.login}>
          <a className={style.loginLink} href="#">
            Login
          </a>
        </div>
        <button className={style.btn}>Sign up</button>
      </div>
    </header>
  );
};

export default Header;

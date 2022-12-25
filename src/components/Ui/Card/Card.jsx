import React, { useState } from "react";

import style from "./Card.module.css";
import ellipse from "../../../assets/ellipse.png";
import folder from "../../../assets/folder.svg";

const Card = ({ image, title, subtitle, desc }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectClass = () => {
    return isSelected ? setIsSelected(false) : setIsSelected(true);
  };

  return (
    <article className={style.wrapper}>
      <img className={style.ellipse} src={ellipse} alt="" />
      <div className={style.innerWrapper}>
        <div className={style.top}>
          <img src={image} alt={title} />
          <div className={style.text}>
            <p className={style.title}>{title}</p>
            <p className={style.subtitle}>{subtitle}</p>
          </div>
        </div>
        <div className={style.desc}>{desc}</div>
        <div className={style.social}>
          <div onClick={handleSelectClass} className={style.imgWrapper}>
            <svg
              onClick={handleSelectClass}
              className={isSelected ? style.likeActive : style.like}
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.8334 5.25C17.3834 5.25 15.225 6.475 14 8.4C12.775 6.475 10.6167 5.25 8.16669 5.25C4.31669 5.25 1.16669 8.4 1.16669 12.25C1.16669 19.1917 14 26.25 14 26.25C14 26.25 26.8334 19.25 26.8334 12.25C26.8334 8.4 23.6834 5.25 19.8334 5.25Z" />
            </svg>
          </div>
          <div className={style.imgWrapper}>
            <img className={style.folder} src={folder} alt="folder" />
          </div>
          <button className={style.btnVisit}>Visit</button>
        </div>
      </div>
    </article>
  );
};

export default Card;

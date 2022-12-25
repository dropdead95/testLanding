import React from "react";

import style from "./Tools.module.css";
import { cardData } from "../Ui/Card/cardData";
import Card from "../Ui/Card/Card";

const Tools = () => {
  return (
    <section>
      <div className={style.toolsContainer + " " + "container"}>
        <div className={style.textWrapper}>
          <h2 className={style.title}>Most Popular Tools</h2>
          <h3 className={style.subtitle}>
            Tools for the best Designers and Developers most popularly used in
            the world
          </h3>
        </div>
        <div className={style.cardWrapper}>
          {cardData.map(({ image, title, subtitle, desc }, index) => (
            <Card
              key={index}
              image={image}
              title={title}
              subtitle={subtitle}
              desc={desc}
            />
          ))}
        </div>
        <button className={style.btn}>Load more</button>
      </div>
    </section>
  );
};

export default Tools;

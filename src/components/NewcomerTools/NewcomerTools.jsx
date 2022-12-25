import React from "react";

import style from "./NewcomerTools.module.css";
import { newCardData } from "../Ui/NewCard/newCardData";
import NewCard from "../Ui/NewCard/NewCard";

const NewcomerTools = () => {
  return (
    <section>
      <div className={style.newComerToolsContainer + " " + "container"}>
        <div className={style.textWrapper}>
          <h2 className={style.title}>Newcomer Tools</h2>
          <p className={style.desc}>
            Wow! see the latest update of the most recommended tools from
            reliable designers and developers
          </p>
          <button className={style.btn}>Explore more</button>
        </div>
        <div className={style.cardWrapper}>
          {newCardData.map(({ image, title, subtitle, desc }, index) => (
            <NewCard
              key={index}
              image={image}
              title={title}
              subtitle={subtitle}
              desc={desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewcomerTools;

import React from "react";

import style from "./Join.module.css";
import search from "../../assets/search.svg";

const Join = () => {
  return (
    <section>
      <div className={style.joinContainer + " " + "container"}>
        <div className={style.textBlock}>
          <h2 className={style.title}>Become a contributor?</h2>
          <p className={style.desc}>
            Join us and get tips & tricks to become a great Designer and
            Developer
          </p>
          <div className={style.inputWrapper}>
            <input
              className={style.input}
              placeholder="Enter your email..."
              type="text"
            />
            <button className={style.btn}>Join US</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;

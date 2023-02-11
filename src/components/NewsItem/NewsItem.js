import React from "react";
import s from "./NewsItem.module.css";
import bg_img1 from "../../media/bgimg.svg";

const NewsItem = () => {
  return (
    <>
      <div className={s.news_item}>
        <img src={bg_img1} alt="" />
        <p className={s.news_item_title}>
          РЕАЛИЗОВАНА ВОЗМОЖНОСТЬ ПОДКЛЮЧЕНИЯ СИГНАЛЬНОЙ ЛАМПЫ К БЛОКАМ
          УПРАВЛЕНИЯ PCB-SH
          УПРАВЛЕНИЯ PCB-SH
          УПРАВЛЕНИЯ PCB-SH
          УПРАВЛЕНИЯ PCB-SH
          УПРАВЛЕНИЯ PCB-SH
        </p>
      </div>
    </>
  );
};

export default NewsItem;

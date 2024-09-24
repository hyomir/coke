import React from "react";
import "assets/css/since.css";
import db from 'data/data.json'
import SinceNewItem from "./SinceNewItem";

const historyList = db.history

function SinceNew(){
  return (
    <section className="new_contents">
        <div className="new_left">
          <div class="new_title">
            <h3>최신 컨텐츠</h3>
            <p>6개의 이야기</p>
          </div>
          <div className="new_cont">
            <a href="#none">
              {historyList[0].img_url && <img src={process.env.PUBLIC_URL +`/images/${historyList[0].img_url}`} alt={historyList[0].title} />}
              <div className="cont_text">
                <h4>{historyList[0].title}</h4>
                <p>{historyList[0].desc}</p>
              </div>
            </a>
          </div>
        </div>
        <div className="new_right">
          <ul className="cont_list">
          {historyList.slice(1, 7).map((item, index) => (
          <SinceNewItem key={index} item={item} />
        ))}
          </ul>
        </div>
    </section>
  );
}

export default SinceNew;

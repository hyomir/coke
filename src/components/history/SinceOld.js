import React from "react";
import SinceOldItem from './SinceOldItem'
import "assets/css/since.css";
import db from 'data/data.json'

const historyList = db.history

function SinceOld(){
  return (
    <section className="old_contents">
      <h3>지난 컨텐츠</h3>
      <ul className="old_cont_list">
        {historyList.slice(7, 12).map((item, index) => (
          <SinceOldItem key={index} item={item} />
        ))}
      </ul>
    </section>
  );
}

export default SinceOld;

import React from "react";
import "assets/css/since.css";
import BasicCard from 'components/template/BasicCard'
import TabCard from 'components/template/TabCard'
import Sns from 'components/template/Sns'
import SinceNew from "./SinceNew";
import SinceOld from "./SinceOld";
import db from 'data/data.json'

const historyList = db.history

function Since() {
  return (
    <div className="since">
      <div className="since_title">
        <h2>코카 - 콜라 역사</h2>
        <div className="since_galley">
          <h3>HISTORY</h3>
        </div>
      </div>
      <div className="since_text">
        <h3>Since 1886</h3>
        <p>130여 년 동안 사람들의 일상 속에서 짜릿함과 행복을 나누어온 코카-콜라!<br/>1886년 코카-콜라의 탄생부터 오늘이 있기까지, 흥미롭고 다양한 이야기들을 만나보세요.</p>
      </div>
      <div class="new_cont_wrap">
      <SinceNew/>
      </div>
      <div class="old_cont_wrap">
        <SinceOld/>
      </div>
      <div className="related_contents">
        <h3>관련 컨텐츠</h3>
        <div className="related_cont_wrap">
        {historyList.filter((list,index) => index >= 12).map((list) => (
        <BasicCard 
          key={list.id}
          title={list.title}
          desc={list.desc}
          img_url={list.img_url}
        />
        ))}
        </div>
      </div>
      <div className="tab_content">
        {/* <TabCard></TabCard> */}
      </div>
      <Sns></Sns>
    </div>
  );
}

export default Since;

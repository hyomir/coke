import React from "react";
import "assets/css/since.css";
import BasicCard from 'components/template/BasicCard'
import TabCard from 'components/template/TabCard'
import Sns from 'components/template/Sns'
import SinceNew from "./SinceNew";
import SinceOld from "./SinceOld";
function Since() {
  return (
    <div className="since">
      <div className="since_title">
        <h2>코카 - 콜라 역사</h2>
        <div className="since_galley"></div>
      </div>
      <div className="since_text">
        <h3>Since 1886</h3>
        <p>설명설명설명</p>
      </div>
      <SinceNew></SinceNew>
      <div class="old_cont_wrap">
        <SinceOld></SinceOld>
      </div>
      <div className="related_contents">
        <h3>관련 컨텐츠</h3>
        <div className="related_cont_wrap">
          <BasicCard></BasicCard>
          <BasicCard></BasicCard>
          <BasicCard></BasicCard>
        </div>
      </div>
      <div className="tab_content">
        <TabCard></TabCard>
      </div>
      <Sns></Sns>
    </div>
  );
}

export default Since;

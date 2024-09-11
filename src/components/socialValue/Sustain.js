import React from "react";
import 'assets/css/sustain.css'
import SubTitle from "components/template/SubTitle";
import BasicCard from "components/template/BasicCard";
import LineSimple from "components/template/LineSimple";
import TabCard from "components/template/TabCard";
import Sns from "components/template/Sns";
function Sustain() {
  return (
    <div className="sustain">
      <div className="sustain_title_cont">
        <h2>지속 가능한 미래</h2>
        <SubTitle></SubTitle>
        <div className="sustain_text_cont">
          <div className="img_cont">
            <img src="https://placehold.co/522x284/png" alt="" />
          </div>
          <div className="text_cont">
            <p>설명 설명 설명</p>
          </div>
        </div>
      </div>
      <div className="sustain_project_cont">
        <h3>코카 - 콜라의 지속 가능성 분야</h3>
        <div className="project_cont_wrap">
          <BasicCard></BasicCard>
          <BasicCard></BasicCard>
          <BasicCard></BasicCard>
        </div>
      </div>
      <div className="sustain_report_cont">
      <div className="cont01">
          <LineSimple></LineSimple>
        </div>
        <div className="cont02">
          <LineSimple></LineSimple>
        </div>
      </div>
      <div className="sustain_tab_cont">
        <TabCard></TabCard>
      </div>
        <Sns></Sns>
    </div>
  );
}

export default Sustain;

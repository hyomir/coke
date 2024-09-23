import React from "react";
import 'assets/css/sustain.css'
import SubTitle from "components/template/SubTitle";
import BasicCard from "components/template/BasicCard";
import LineSimple from "components/template/LineSimple";
import TabCard from "components/template/TabCard";
import Sns from "components/template/Sns";
import db from "data/data.json"
const socialData = db.social
function Sustain() {
  const title="지속 가능한 지구를 위한 노력"
  const desc="코카-콜라는 사회와 환경, 경제적 책임을 다하기 위하여 종합적인 방식으로 지속 가능성 전략을 고민합니다."
  return (
    <div className="sustain">
      <div className="sustain_title_cont">
        <h2>지속 가능한 미래</h2>
        <SubTitle title={title} desc={desc}></SubTitle>
        <div className="sustain_text_cont">
          <div className="img_cont">
          </div>
          <div className="text_cont">
            <p>코카-콜라는 지속 가능하고 더 나은 미래를 추구합니다.<br/> 모두가 더불어 사는 세상을 만들기 위해 전 세계 수많은 사람들의 삶, 지역사회,<br/>
                더 나아가 우리가 살고 있는 지구 전체에 긍정적인 변화를 만들기 위해<br/>노력하고 있습니다. ​</p>
          </div>
        </div>
      </div>
      <div className="sustain_project_cont">
        <h3>코카 - 콜라의 지속 가능성 분야</h3>
        <div className="project_cont_wrap">
        {socialData.filter((list,index) => index <= 2).map((list) => (
          <BasicCard 
            key={list.id}
            title={list.title}
            desc={list.desc}
            img_url={list.img_url}
          />
        ))}
        </div>
      </div>
      <div className="sustain_report_cont">
      <div className="cont01">
      <LineSimple
      title={socialData[5].title}
      img_url={socialData[5].img_url}
      desc={socialData[5].desc}
      />
        </div>
        <div className="cont02">
        <LineSimple
      title={socialData[6].title}
      img_url={socialData[6].img_url}
      desc={socialData[6].desc}
      />
        </div>
      </div>
      <div className="sustain_tab_cont">
        {/* <TabCard></TabCard> */}
      </div>
        <Sns></Sns>
    </div>
  );
}

export default Sustain;

import React from 'react'
import'assets/css/social.css'
import SubTitle from 'components/template/SubTitle'
import LineSimple from 'components/template/LineSimple'
import TabCard from 'components/template/TabCard'
import Sns from 'components/template/Sns'
function SocialValue() {
  return (
    <div className='social_value'>
      <div className="social_title_cont">
        <h2>사회 공헌</h2>
        <SubTitle></SubTitle>
        <div className="social_text_cont">
          <div className="img_cont">
          <img src="https://placehold.co/522x284/png" alt="" />
          </div>
          <div className="text_cont">
            <p>코카-콜라의 구성원뿐만 아니라 서로 영향을 주고 받는 지역사회에 이르기까지​<br/>
              함께 성장하기 위한 발판을 마련하고 많은 사람들의 삶을 개선하기 위해 행동합니다. </p>
          </div>
        </div>
      </div>
      <div className="social_report_cont">
        <div className="cont01">
          <LineSimple></LineSimple>
        </div>
        <div className="cont02">
          <LineSimple></LineSimple>
        </div>
      </div>
      <div className="social_tab_cont">
        <TabCard></TabCard>
      </div>
      <Sns></Sns>
    </div>
  )
}

export default SocialValue
import React from 'react'
import'assets/css/social.css'
import SubTitle from 'components/template/SubTitle'
import LineSimple from 'components/template/LineSimple'
import TabCard from 'components/template/TabCard'
import Sns from 'components/template/Sns'
function SocialValue() {
  return (
    <div className='SocialValue'>
      <div className="social_title_cont">
        <h2>사회 공헌</h2>
        <SubTitle></SubTitle>
        <div className="social_text_cont">
          <div className="img_cont">
          <img src="https://placehold.co/522x284/png" alt="" />
          </div>
          <div className="text_cont">
            <p>설명 설명 설명</p>
          </div>
        </div>
      </div>
      <div className="social_report_cont">
        <LineSimple></LineSimple>
        <LineSimple></LineSimple>
      </div>
      <div className="social_tab_cont">
        <TabCard></TabCard>
      </div>
      <Sns></Sns>
    </div>
  )
}

export default SocialValue
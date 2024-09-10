import React from 'react'
import 'assets/css/company.css'
import TabCard from 'components/template/TabCard'
import Sns from 'components/template/Sns'
import LineSimple from 'components/template/LineSimple'

function Company() {
  return (
    <div className="company">
      <div className="company_title">
        <h2>코카 - 콜라 역사</h2>
        <div className="company_galley"></div>
      </div>
      <div className="company_text">
        <h3>코카 - 콜라 컴퍼니</h3>
          <p>
            설명설명설명
          </p>
      </div>
      <div className="company_tab_wrap">
        <TabCard></TabCard>
      </div>
      <div className="company_cont">
        <div className="cont01">
          <LineSimple></LineSimple>
        </div>
        <div className="cont02">
        <LineSimple></LineSimple>
        </div>
      </div>
      <div className="tab_menu_wrap">
      <TabCard></TabCard>
      </div>
      <div className="sns_wrap">
        <Sns></Sns>
      </div>
    </div>
  )
}

export default Company
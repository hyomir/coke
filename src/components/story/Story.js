import React from 'react'
import 'assets/css/story.css'
import Latest from 'components/template/Latest';
import BasicCard from 'components/template/BasicCard';
import Sns from 'components/template/Sns';
function Story() {
  return (
    <div className='story'>
      <h2>브랜드 스토리</h2>
            <div className="story_galley">
              <p>스토리 소개 문구</p>
            </div>
            <div className="latest_wrap">
            <Latest></Latest>
            </div>
            <div className="rec_content">
              <h2>관련 컨텐츠</h2>
                <div className="cont_wrap">
                    <BasicCard></BasicCard>
                    <BasicCard></BasicCard>
                    <BasicCard></BasicCard>
                </div>
                <div className="pager">
                </div>
            </div>
            <Sns></Sns>
    </div>
  )
}

export default Story
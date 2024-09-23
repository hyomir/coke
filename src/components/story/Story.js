import React from 'react'
import 'assets/css/story.css'
import Latest from 'components/template/Latest';
import BasicCard from 'components/template/BasicCard';
import Sns from 'components/template/Sns';
import db from 'data/data.json'

const recList = db.content
function Story() {
  const title="뜨거운 여름, 쿨하게!"
  const content ="스프라이트 차은우 X 권은비의 쿨한 만남!"
  const video_title="무더위를 쿨~하게 날려줄 스프라이트!"
  const img ="/images/home/latest.webp"
  return (
    <div className='story'>
      <div class="story_title">
        <h2>브랜드 스토리</h2>
        <div className="story_galley">
          <h3>코카-콜라, 환타, 스프라이트 등 다양한 코카-콜라사 브랜드 관련 마케팅,<br/> 모델 인터뷰, 비하인드 화보 등 재미있고 흥미진진한 브랜드 이야기​</h3>
        </div>
      </div>
      <div className="latest_wrap">
      <section className="latest_section">
          <Latest title={title} content={content} video_title={video_title} img={img}></Latest>
      </section>
      </div>
      <div className="rec_content">
        <h3>관련 컨텐츠</h3>
        <div className="cont_wrap">
        {recList.map((list) => (
                    <BasicCard 
                        key={list.id}
                        title={list.title}
                        img_url={list.img_url}
                        desc={list.desc}
                    />
                ))}
        </div>
        {/* <div className="pager">
          <div className="pager_cont"></div>
        </div> */}
      </div>
      <Sns></Sns>
    </div>
  )
}

export default Story
import React from 'react'
import 'assets/css/home.css'
import Latest from 'components/template/Latest'

function HomeLatest() {
    const title="뜨거운 여름, 쿨하게!"
    const content ="스프라이트 차은우 X 권은비의 쿨한 만남!"
    const video_title="무더위를 쿨~하게 날려줄 스프라이트!"
    const img ="/images/home/latest.webp"
    return (
        <section className="latest_section">
            <Latest title={title} content={content} video_title={video_title} img={img}></Latest>
        </section>
    );
}

export default HomeLatest;
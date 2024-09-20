import React from 'react'
import 'assets/css/home.css'
import BasicCard from 'components/template/BasicCard'

function HomeRec() {
    const title="props 개념으로 컨텐츠 전달하기"
    const content ="본문내용 전달하기"

    return (
        <section className='rec_section'>
            <h2>추천 컨텐츠</h2>
                <div class="rec_list">
                    <BasicCard title={title} content={content}></BasicCard>
                    <BasicCard></BasicCard>
                    <BasicCard></BasicCard>
                </div>
        </section>
    );
}

export default HomeRec;
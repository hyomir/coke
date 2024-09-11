import React from 'react'
import 'assets/css/home.css'
import BasicCard from 'components/template/BasicCard'

function HomeRec() {
    return (
        <section className='rec_section'>
            <h2>추천 컨텐츠</h2>
                <div class="rec_list">
                    <BasicCard></BasicCard>
                    <BasicCard></BasicCard>
                    <BasicCard></BasicCard>
                </div>
        </section>
    );
}

export default HomeRec;
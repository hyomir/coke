import React from 'react'
import 'assets/css/home.css'
import LineCard from 'components/template/LineCard'

function HomeSocial() {
    return (
        <section className="social_section">
            <div className="social_value">
                <h2>사회적 가치</h2>
                <div className="social_wrap">
                    <LineCard></LineCard>
                    <div className="social_deco">
                        <div>
                            꾸밈을 위한 섹션
                        </div>
                    </div>
                    <LineCard></LineCard>
                </div>
            </div>
        </section>
    );
}

export default HomeSocial;
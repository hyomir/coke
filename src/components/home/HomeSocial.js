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
                        <div className="deco_cont">
                            <div className="cont_01">
                                
                            </div>
                            <div className="cont_text">
                                <p>시원하게 즐겨요</p>
                            </div>
                            <div className="cont_02"></div>
                            <div className="cont_03">
                                <p>코카-콜라 맛있다</p>
                            </div>
                        </div>
                    </div>
                    <LineCard></LineCard>
                </div>
            </div>
        </section>
    );
}

export default HomeSocial;
import React from 'react'
import 'assets/css/home.css'
import LineCard from 'components/template/LineCard'
import DB from 'data/data.json'

const socialData = DB.social

function HomeSocial() {
    return (
        <section className="social_section">
            <div className="social_value">
                <h2>사회적 가치</h2>
                <div className="social_wrap">
                    <LineCard title={socialData[5].title}
                    img_url={socialData[5].img_url}
                    desc={socialData[5].desc}
                    ></LineCard>
                    <div className="social_deco">
                        <div className="deco_cont">
                            <div className="cont_01">
                            </div>
                            <div className="cont_text">
                                <p>시원하게 즐겨요</p>
                            </div>
                            <div className="cont_02"></div>
                            <div className="cont_03">
                                
                            </div>
                        </div>
                    </div>
                    <LineCard
                    title={socialData[6].title}
                    img_url={socialData[6].img_url}
                    desc={socialData[6].desc}
                    ></LineCard>
                </div>
            </div>
        </section>
    );
}

export default HomeSocial;
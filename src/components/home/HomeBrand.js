import React from 'react'
import 'assets/css/home.css'

function HomeBrand() {
    return (
            <section className="brand_section">
                <h2>브랜드 이야기</h2>
                <div className="brand_cont">
                    <div className="left_cont">
                        <div className="cont_01">
                        </div>
                        <div className="cont_02">
                            <img src="images/story/230418-newjeans-campaign-kakao-800x800.jpg" alt="" />
                        </div>
                    </div>
                    <div className="right_cont">
                        <img src="images/story/231016_full-hero_brand-story_1440x810.jpg" alt="" />
                    </div>
                </div>
        </section>
    );
}

export default HomeBrand;
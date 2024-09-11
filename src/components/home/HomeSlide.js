import React from 'react'
import 'assets/css/home.css'
import SubTitle from 'components/template/SubTitle'

function HomeSlide(){
    return (
        <section class="main_slider">
            <div className="main_title">
                <h2>맛있는 음식, 그리고 코카 - 콜라.</h2>
                <div class="btn">
                    <button className="stop" type='button'>정지</button>
                    <button className="play" type='button'>플레이</button>
                    <a href="#none">코카콜라 구매하기</a>
                </div>
            </div>
            <SubTitle></SubTitle>
        </section>
    );
}

export default HomeSlide;
import React from 'react'
import 'assets/css/template.css'
import 'assets/css/home.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

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
            <Swiper
            spaceBetween={50}
            slidesPerView={1}
            >          
                <SwiperSlide>
                <div className="subtitle-section">
                    <div className="subtitle-wrap">
                        <div className="sub-img">
                        </div>
                        <div className="sub-text">
                            <h3>맛있는 마법을 더해요.</h3>
                            <p>행복을 완성하는 두 가지!<br/>맛있는 음식, 그리고 코카-콜라!</p>
                            <button type="button" className='more-btn'>바로가기</button>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="subtitle-section">
                    <div className="subtitle-wrap">
                        <div className="sub-img">
                        </div>
                        <div className="sub-text">
                            <h3>맛있는 마법을 더해요.</h3>
                            <p>행복을 완성하는 두 가지!<br/>맛있는 음식, 그리고 코카-콜라!</p>
                            <button type="button" className='more-btn'>바로가기</button>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="subtitle-section">
                    <div className="subtitle-wrap">
                        <div className="sub-img">
                        </div>
                        <div className="sub-text">
                            <h3>맛있는 마법을 더해요.</h3>
                            <p>행복을 완성하는 두 가지!<br/>맛있는 음식, 그리고 코카-콜라!</p>
                            <button type="button" className='more-btn'>바로가기</button>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="subtitle-section">
                    <div className="subtitle-wrap">
                        <div className="sub-img">
                        </div>
                        <div className="sub-text">
                            <h3>맛있는 마법을 더해요.</h3>
                            <p>행복을 완성하는 두 가지!<br/>맛있는 음식, 그리고 코카-콜라!</p>
                            <button type="button" className='more-btn'>바로가기</button>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper> 
        </section>
    );
}

export default HomeSlide;
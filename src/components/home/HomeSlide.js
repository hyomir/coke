import React from 'react'
import 'assets/css/template.css'
import 'assets/css/home.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
            modules={[Navigation, Pagination, A11y, Autoplay]}
            pagination={{type: 'fraction'}}
            navigation={true}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            speed={400}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="mySwiper"
            >          
                <SwiperSlide>
                <div className="subtitle-section">
                    <div className="subtitle-img01">
                    <div className="subtitle-wrap">
                        <div className="sub-text">
                            <h3>맛있는 마법을 더해요.</h3>
                            <p>행복을 완성하는 두 가지!<br/>맛있는 음식, 그리고 코카-콜라!</p>
                            <button type="button" className='more-btn'>마법 체험해보기</button>
                        </div>
                    </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="subtitle-section">
                    <div className="subtitle-img02">
                        <div className="subtitle-wrap">
                            <div className="sub-text">
                                <h3>코카 - 콜라가 숲을 가꾸는 이유는?</h3>
                                <p>코카 - 콜라 물 환원 프로젝트</p>
                                <button type="button" className='more-btn'>활동 알아보기</button>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="subtitle-section">
                    <div className="subtitle-img03">
                        <div className="subtitle-wrap">
                            <div className="sub-text">
                                <h3>소셜미디어를 히트한 닥터 페퍼 레시피 4종</h3>
                                <p>닥터 페퍼를 더 특별하게 마실 수 있는 방법</p>
                                <button type="button" className='more-btn'>레시피 알아보기</button>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="subtitle-section">
                    <div className="subtitle-img04">
                        <div className="subtitle-wrap">
                            <div className="sub-text">
                                <h3>힙플레이스 성수, 레드리본 맛집 순례</h3>
                                <p>성수 레드리본 맛집 대 공개!</p>
                                <button type="button" className='more-btn'>맛집 탐방하기</button>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="subtitle-section">
                    <div className="subtitle-img05">
                        <div className="subtitle-wrap">
                            <div className="sub-text">
                                <h3>추억은 부드러운 밀크 탄산처럼, 암바사 제로</h3>
                                <p>상쾌한 탄산, 몽글몽글한 밀크<br/>그리고 추억의 만남</p>
                                <button type="button" className='more-btn'>추억 탐방하기</button>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper> 
        </section>
    );
}

export default HomeSlide;
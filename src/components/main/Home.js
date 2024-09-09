import React from 'react'
import 'assets/css/home.css'
import BasicCard from 'components/template/BasicCard'
import SubTitle from 'components/template/SubTitle'
import Latest from 'components/template/Latest'
import LineCard from 'components/template/LineCard'


function Home() {
    return (
        <div className="home">
            <div className="main_wrap">
                <div className="main_title">
                    <h2>맛있는 음식, 그리고 코카 - 콜라.</h2>
                    <div class="btn">
                        <button type='button'>정지</button>
                        <a href="#none">이동하기</a>
                    </div>
                </div>
                <SubTitle></SubTitle>
            </div>
            <div className="rec_wrap">
                <h2>추천 컨텐츠</h2>
                <div class="rec_list">
                    <BasicCard></BasicCard>
                    <BasicCard></BasicCard>
                    <BasicCard></BasicCard>
                </div>
            </div>
            <div className="latest_wrap">
                <Latest></Latest>
            </div>
            <div className="product_wrap">
                <h2>코카콜라 제품</h2>
                <div className="product_slider">
                    <ul className="top_slider">
                        <li>
                            <a href="#none">
                            <div className="item_wrap">
                                <div className="item_text">
                                    <h3>제품명</h3>
                                    <p>제품 설명이 들어가요<br/>
                                        짧아야 해요.
                                    </p>
                                </div>
                                <div className="item_img">
                                <img src="https://placehold.co/88x140" alt="임시이미지" />
                                </div>
                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="#none">
                            <div className="item_wrap">
                                <div className="item_text">
                                    <h3>제품명</h3>
                                    <p>제품 설명이 들어가요<br/>
                                        짧아야 해요.
                                    </p>
                                </div>
                                <div className="item_img">
                                <img src="https://placehold.co/88x140" alt="임시이미지" />
                                </div>
                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="#none">
                            <div className="item_wrap">
                                <div className="item_text">
                                    <h3>제품명</h3>
                                    <p>제품 설명이 들어가요<br/>
                                        짧아야 해요.
                                    </p>
                                </div>
                                <div className="item_img">
                                <img src="https://placehold.co/88x140" alt="임시이미지" />
                                </div>
                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="#none">
                            <div className="item_wrap">
                                <div className="item_text">
                                    <h3>제품명</h3>
                                    <p>제품 설명이 들어가요<br/>
                                        짧아야 해요.
                                    </p>
                                </div>
                                <div className="item_img">
                                <img src="https://placehold.co/88x140" alt="임시이미지" />
                                </div>
                            </div>
                            </a>
                        </li>
                    </ul>
                    <ul className="bottom_slider">
                        <li>
                            <a href="#none">
                            <div className="item_wrap">
                            <div className="item_img">
                                <img src="https://placehold.co/88x140" alt="임시이미지" />
                                </div>
                                <div className="item_text">
                                    <h3>제품명</h3>
                                    <p>제품 설명이 들어가요<br/>
                                        짧아야 해요.
                                    </p>
                                </div>
                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="#none">
                            <div className="item_wrap">
                                <div className="item_img">
                                <img src="https://placehold.co/88x140" alt="임시이미지" />
                                </div>
                                <div className="item_text">
                                    <h3>제품명</h3>
                                    <p>제품 설명이 들어가요<br/>
                                        짧아야 해요.
                                    </p>
                                </div>
        
                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="#none">
                            <div className="item_wrap">
                            <div className="item_img">
                                <img src="https://placehold.co/88x140" alt="임시이미지" />
                                </div>
                                <div className="item_text">
                                    <h3>제품명</h3>
                                    <p>제품 설명이 들어가요<br/>
                                        짧아야 해요.
                                    </p>
                                </div>
                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="#none">
                            <div className="item_wrap">
                            <div className="item_img">
                                <img src="https://placehold.co/88x140" alt="임시이미지" />
                                </div>
                                <div className="item_text">
                                    <h3>제품명</h3>
                                    <p>제품 설명이 들어가요<br/>
                                        짧아야 해요.
                                    </p>
                                </div>
                            </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="content_wrap">
                <div className="history_wrap">
                    <h2>코카 콜라 역사</h2>
                    <div className="history_cont">
                        <div className="left_cont">
                        </div>
                        <div className="right_cont">
                            <div className="cont_01"></div>
                            <div className="cont_02"></div>
                        </div>
                    </div>
                </div>
                <div className="brand_wrap">
                    <h2>브랜드 이야기</h2>
                    <div className="brand_cont">
                        <div className="left_cont">
                            <div className="cont_01"></div>
                            <div className="cont_02"></div>
                        </div>
                        <div className="right_cont">
                        </div>
                    </div>
                </div>
            </div>
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
        </div>
    );
}

export default Home;
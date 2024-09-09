import React from 'react'
import 'assets/css/template.css'

function LineCard() {
    return (
        <div className="line-card-section">
            <div className="line-card-wrap">
                <div className="deco_cont"></div>
                <div className="line-card-content">
                    <div className="card_img">
                        <img src="https://placehold.co/413x192" alt="임시이미지" />
                    </div>
                    <div className="card_text">
                        <h3>테스트 텍스트</h3>
                        <p>임시 설명글 입니다. 일정한 길이가 넘어가면 ... </p>
                    </div>
                    <a href="#none">더보기</a>
                </div>
            <div className="deco_text">데코 텍스트 - 코카 - 콜라</div>
            </div>
        </div>
    );
}

export default LineCard;
import React from 'react'
import 'assets/css/template.css'
import BtnArr from 'components/template/BtnArr'

function LineCard() {
    return (
        <div className="line-card-section">
            <div className="line-card-wrap">
                <div className="deco_cont"></div>
                <div className="line-card-content">
                    <div className="card-img">
                        <img src="https://placehold.co/413x192" alt="임시이미지" />
                    </div>
                    <div className="card-text">
                        <h3>테스트 텍스트</h3>
                        <p>임시 설명글 입니다. 일정한 길이가 넘어가면 ... </p>
                    </div>
                    <div class="btn-wrap">
                        <BtnArr></BtnArr>
                    </div>
                </div>
            <div className="deco-text">데코 텍스트 - 코카 - 콜라</div>
            </div>
        </div>
    );
}

export default LineCard;
import React from 'react'
import 'assets/css/template.css'
import BtnArr from 'components/template/BtnArr'

function TabCard() {
    return (
        <div className="tab-card-section">
            <div className="tab-card">
                <div className="tab-cont tab-left">
                    <h3>제목 텍스트</h3>
                    <div className="tab-text">
                        <p>내용을 작성해주세요.</p>
                        <BtnArr></BtnArr>
                    </div>
                </div>
                <div className="tab-cont tab-right">
                <h3>제목 텍스트</h3>
                    <div className="tab-text">
                        <p>내용을 작성해주세요.</p>
                        <BtnArr></BtnArr>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabCard;
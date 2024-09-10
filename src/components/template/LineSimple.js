import React from "react";
function LineSimple() {
    return (
        <div className="line-simple">
            <div className="cont-text">
                <h3>컨텐츠 제목</h3>
                <p>컨텐츠 설명입니다.</p>
                <a href="#none">이동하기</a>
            </div>
            <div className="cont-img">
                <img src="https://placehold.co/413x232" alt="임시이미지" />
            </div>
        </div>
    );
}

export default LineSimple;

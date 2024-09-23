import React from "react";
function LineSimple({title,desc,img_url}) {
    return (
        <div className="line-simple">
            <div className="cont-text">
                <h3>{title}</h3>
                <p>{desc}</p>
                <a href="#none">이동하기</a>
            </div>
            <div className="cont-img">
            {img_url && <img src={`/images/${img_url}`} alt={title} />}
            </div>
        </div>
    );
}

export default LineSimple;

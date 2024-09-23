import React from "react";
import BtnArr from "./BtnArr";
function LineSimple({title,desc,img_url}) {
    return (
        <div className="line-simple">
            <div className="cont-text">
                <h3>{title}</h3>
                <p>{desc}</p>
                <BtnArr/>
            </div>
            <div className="cont-img">
            {img_url && <img src={`/images/${img_url}`} alt={title} />}
            </div>
        </div>
    );
}

export default LineSimple;

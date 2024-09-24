import React from 'react'
import 'assets/css/template.css'
import BtnArr from 'components/template/BtnArr'

function Latest({title,content,video_title,img}) {
    return (
        <div className="latest-section">
            <div className="latest-wrap">
                <div className="latest-title">
                    <h3>최신 컨텐츠</h3>
                    <h4>{title}</h4>
                    <p>{content}</p>
                </div>
                <div className="latest-img">
                    <img src={process.env.PUBLIC_URL +`${img}`} alt="" />
                </div>
                <div className="latest-cont">
                    <div className="cont-wrap">
                        <span>EP. 01</span>
                        <p>{video_title}</p>
                    </div>
                    <BtnArr></BtnArr>
                </div>
            </div>
        </div>
    );
}

export default Latest;
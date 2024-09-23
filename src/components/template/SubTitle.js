import React from 'react'
import 'assets/css/template.css'

function SubTitle({title,desc}) {
    return (
        <div className="subtitle-section">
            <div className="subtitle-wrap">
                <div className="sub-img">
                <div className="sub-text">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <a className='more-btn' href="#none">바로가기</a>
                </div>
                </div>
            </div>
        </div>
    );
}

export default SubTitle;
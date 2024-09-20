import React from 'react'
import 'assets/css/home.css'

function HomeHistory() {
    return (
        <section className="history_section">
            <h2>코카 콜라 역사</h2>
            <div className="history_cont">
                <div className="left_cont">
                    <img src="images/history/company/hero-company-desktop.jpg" alt="" />
                </div>
                <div className="right_cont">
                    <div className="cont_01"></div>
                    <div className="cont_02">
                        <img src="images/history/since/231005_Cards_History3_1102x827.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeHistory;
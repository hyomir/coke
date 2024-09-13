import React from "react";
import "assets/css/home.css";
import HomeSlide from "./HomeSlide";
import HomeRec from "./HomeRec";
import HomeLatest from "./HomeLatest";
import HomePdt from "./HomePdt";
import HomeHistory from "./HomeHistory";
import HomeBrand from "./HomeBrand";
import HomeSocial from "./HomeSocial";

function Home() {
    return (
        <div className="home">
            <div className="main_wrap">
                <HomeSlide></HomeSlide>
            </div>
            <div className="rec_wrap">
                <HomeRec></HomeRec>
            </div>
            <div className=
            "latest_wrap">
                <HomeLatest></HomeLatest>
            </div>
            <div className="product_wrap">
                <HomePdt></HomePdt>
            </div>
            <div className="content_wrap">
                <div className="history_wrap">
                    <HomeHistory></HomeHistory>
                </div>
                <div className="brand_wrap">
                    <HomeBrand></HomeBrand>
                </div>
            </div>
            <div className="social_wrap">
                <HomeSocial></HomeSocial>
            </div>
        </div>
    );
}

export default Home;

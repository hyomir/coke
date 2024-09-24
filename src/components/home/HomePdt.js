import React from "react";
import "assets/css/home.css";
import{Link} from "react-router-dom"

function HomePdt() {
  return (
    <section className="product_section">
      <h2>코카콜라 제품</h2>
      <div className="product_slider">
        <ul className="top_slider">
          <li>
          <Link to={`/brand/detail/1`}>
            <div className="item_wrap">
                <div className="item_text">
                  <h3>코카 - 콜라</h3>
                  <p>
                    일상 속 마법 같은
                    <br />
                    짜릿한 순간을 함께
                  </p>
                </div>
                <div className="item_img">
                  <img src={process.env.PUBLIC_URL +"/images/home/coke.png"} alt="코카콜라" />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to={`/brand/detail/2`}>
              <div className="item_wrap">
                <div className="item_text">
                  <h3>스프라이 - 트</h3>
                  <p>
                  가슴 속을 시원하게
                  <br />
                  물들이는 상쾌함
                  </p>
                </div>
                <div className="item_img">
                <img src={process.env.PUBLIC_URL +"/images/home/sprite.png"} alt="코카콜라" />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to={`/brand/detail/3`}>
              <div className="item_wrap">
                <div className="item_text">
                  <h3>환 - 타</h3>
                  <p>
                  놓칠 수 없는
                  <br />
                  즐거운 환상의 맛
                  </p>
                </div>
                <div className="item_img">
                  <img src={process.env.PUBLIC_URL +"/images/home/fanta.png"} alt="" />
                </div>
              </div>
            </Link>
          </li>
          <li>
          <Link to={`/brand/detail/4`}>
              <div className="item_wrap">
                <div className="item_text">
                  <h3>닥터 - 페퍼</h3>
                  <p>
                  마셔보면 백퍼,
                  <br />
                  닥터 페퍼!
                  </p>
                </div>
                <div className="item_img">
                <img src={process.env.PUBLIC_URL +"/images/home/drpp.png"} alt="" />
                </div>
              </div>
            </Link>
          </li>
        </ul>
        <ul className="bottom_slider">
          <li>
          <Link to={`/brand/detail/5`}>
              <div className="item_wrap">
                <div className="item_img">
                <img src={process.env.PUBLIC_URL +"/images/home/powerade.png"} alt="" />
                </div>
                <div className="item_text">
                  <h3>파워 - 에이드</h3>
                  <p>
                  열정과 파워를 담은
                  <br />
                  스포츠음료
                  </p>
                </div>
              </div>
            </Link>
          </li>
          <li>
          <Link to={`/brand/detail/6`}>
              <div className="item_wrap">
                <div className="item_img">
                <img src={process.env.PUBLIC_URL +"/images/home/toreta.png"} alt="" />
                </div>
                <div className="item_text">
                  <h3>토레타 - !</h3>
                  <p>
                  언제 어디서나 가볍게
                  <br />
                  즐길 수 있는 수분
                  </p>
                </div>
              </div>
            </Link>
          </li>
          <li>
          <Link to={`/brand/detail/6`}>
              <div className="item_wrap">
                <div className="item_img">
                <img src={process.env.PUBLIC_URL +"/images/home/seagram.png"} alt="" />
                </div>
                <div className="item_text">
                  <h3>씨그램</h3>
                  <p>
                  마지막까지 톡!
                  <br />
                  쏘는 상쾌함!
                  </p>
                </div>
              </div>
            </Link>
          </li>
          <li>
          <Link to={`/brand/detail/8`}>
              <div className="item_wrap">
                <div className="item_img">
                <img src={process.env.PUBLIC_URL +"/images/home/georgia.png"} alt="" />
                </div>
                <div className="item_text">
                  <h3>조지아</h3>
                  <p>
                  깨우다,
                  <br />
                  오늘을 새롭게
                  </p>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default HomePdt;

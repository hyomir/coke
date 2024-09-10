import React from "react";
import "assets/css/since.css";
import BasicCard from 'components/template/BasicCard'
import TabCard from 'components/template/TabCard'

function Since() {
  return (
    <div className="since">
      <div className="since_title">
        <h2>코카 - 콜라 역사</h2>
        <div className="since_galley"></div>
      </div>
      <div className="since_text">
        <h3>Since 1886</h3>
        <p>설명설명설명</p>
      </div>
      <div className="new_contents">
        <div className="new_left">
          <h2>최신 컨텐츠</h2>
          <p>6개의 이야기</p>
          <div className="new_cont">
            <a href="#none">
              <img src="https://placehold.co/414x614/png" alt="" />
              <div className="cont_text">
                <h3>컨텐츠 제목</h3>
                <p>컨텐츠 요약 내용이 두 줄 정도</p>
              </div>
            </a>
          </div>
        </div>
        <div className="new_right">
          <ul className="cont_list">
            <li>
              <a href="#none">
                <div className="cont">
                  <img src="https://placehold.co/304x192/png" alt="" />
                  <div className="cont_text">
                    <h3>컨텐츠 제목</h3>
                    <p>컨텐츠 요약 내용이 두 줄 정도</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#none">
                <div className="cont">
                  <img src="https://placehold.co/304x192/png" alt="" />
                  <div className="cont_text">
                    <h3>컨텐츠 제목</h3>
                    <p>컨텐츠 요약 내용이 두 줄 정도</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#none">
                <div className="cont">
                  <img src="https://placehold.co/304x192/png" alt="" />
                  <div className="cont_text">
                    <h3>컨텐츠 제목</h3>
                    <p>컨텐츠 요약 내용이 두 줄 정도</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#none">
                <div className="cont">
                  <img src="https://placehold.co/304x192/png" alt="" />
                  <div className="cont_text">
                    <h3>컨텐츠 제목</h3>
                    <p>컨텐츠 요약 내용이 두 줄 정도</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#none">
                <div className="cont">
                  <img src="https://placehold.co/304x192/png" alt="" />
                  <div className="cont_text">
                    <h3>컨텐츠 제목</h3>
                    <p>컨텐츠 요약 내용이 두 줄 정도</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#none">
                <div className="cont">
                  <img src="https://placehold.co/304x192/png" alt="" />
                  <div className="cont_text">
                    <h3>컨텐츠 제목</h3>
                    <p>컨텐츠 요약 내용이 두 줄 정도</p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="before_contents">
        <h2>지난 컨텐츠</h2>
        <ul className="before_cont_list">
          <li>
            <a href="none">
              <img src="https://placehold.co/196x110/png" alt="" />
              <div className="cont_text">
                <h3>컨텐츠 제목</h3>
                <p>컨텐츠 요약 내용</p>
              </div>
            </a>
          </li>
          <li>
            <a href="none">
              <img src="https://placehold.co/196x110/png" alt="" />
              <div className="cont_text">
                <h3>컨텐츠 제목</h3>
                <p>컨텐츠 요약 내용</p>
              </div>
            </a>
          </li>
          <li>
            <a href="none">
              <img src="https://placehold.co/196x110/png" alt="" />
              <div className="cont_text">
                <h3>컨텐츠 제목</h3>
                <p>컨텐츠 요약 내용</p>
              </div>
            </a>
          </li>
          <li>
            <a href="none">
              <img src="https://placehold.co/196x110/png" alt="" />
              <div className="cont_text">
                <h3>컨텐츠 제목</h3>
                <p>컨텐츠 요약 내용</p>
              </div>
            </a>
          </li>
          <li>
            <a href="none">
              <img src="https://placehold.co/196x110/png" alt="" />
              <div className="cont_text">
                <h3>컨텐츠 제목</h3>
                <p>컨텐츠 요약 내용</p>
              </div>
            </a>
          </li>
          <li>
            <a href="none">
              <img src="https://placehold.co/196x110/png" alt="" />
              <div className="cont_text">
                <h3>컨텐츠 제목</h3>
                <p>컨텐츠 요약 내용</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="related_contents">
        <h2>관련 컨텐츠</h2>
        <div className="related_cont_wrap">
          <BasicCard></BasicCard>
          <BasicCard></BasicCard>
          <BasicCard></BasicCard>
        </div>
      </div>
      <div className="tab_content">
        <TabCard></TabCard>
      </div>
    </div>
  );
}

export default Since;

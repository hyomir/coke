import React from 'react'
import 'assets/css/brand.css'
import Sns from 'components/template/Sns'

function Brand() {
    return (
        <section className="brand">
            <h2>코카 - 콜라 제품</h2>
            <ul className='psb'>
                <li><a href="#none">모든 제품</a></li>
                <li><a href="#none">스포츠 드링크</a></li>
                <li><a href="#none">탄산음료</a></li>
                <li><a href="#none">커피</a></li>
                <li><a href="#none">주스</a></li>
                <li><a href="#none">차</a></li>
            </ul>
            <div className='product'>
                <ul className='brands_list'>
                    <li><a href="#none">
                        <div className="brand"><img src="https://placehold.co/300x300" alt="임시이미지" /></div>
                    </a></li>
                    <li><a href="#none">
                        <div className="brand"><img src="https://placehold.co/300x300" alt="임시이미지" /></div>
                    </a></li>
                    <li><a href="#none">
                        <div className="brand"><img src="https://placehold.co/300x300" alt="임시이미지" /></div>
                    </a></li>
                    <li><a href="#none">
                        <div className="brand"><img src="https://placehold.co/300x300" alt="임시이미지" /></div>
                    </a></li>
                </ul>
            </div>
            <Sns></Sns>
        </section>
    );
}

export default Brand;
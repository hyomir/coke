import React from 'react'
import 'assets/css/home.css'
import BasicCard from 'components/template/BasicCard'
import db from 'data/data.json'

const recList = db.content
console.log(recList)

function HomeRec(){
    return (
        <section className='rec_section'>
            <h2>추천 컨텐츠</h2>
            <div className="rec_list">
            {recList.filter((list,index) => index <= 2).map((list) => (
                    <BasicCard 
                        key={list.id}
                        title={list.title}
                        img_url={list.img_url}
                    />
                ))}
            </div>
        </section>
    );
}

export default HomeRec;
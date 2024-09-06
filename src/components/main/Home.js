import React from 'react'
import Sns from 'components/template/Sns'
import BasicCard from 'components/template/BasicCard'
import SubTitle from 'components/template/SubTitle'
import Latest from 'components/template/Latest'
import LineCard from 'components/template/LineCard'


function Home() {
    return (
        <div className="home">
            <BasicCard></BasicCard>
            <Sns></Sns>
            <SubTitle></SubTitle>
            <Latest></Latest>
            <LineCard></LineCard>
        </div>
    );
}

export default Home;
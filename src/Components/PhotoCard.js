// export PhotoCard
import React from 'react';

import styled from 'styled-components';


const DateH2 = styled.h2 `
    color: pink;
`
const TitleH3 = styled.h3`
    color: crimson;
`
const ParaP = styled.p`
    color: yellow
    padding:15%
`
const BackgroundDiv = styled.div`
    border: 10px solid yellow
    background-size: cover
    background-position: center
    background-repeat: no-repeat
`

const PhotoCard = (props) => {

    return (
        <BackgroundDiv style={{backgroundImage:`url(${props.url})`}}>
            <div>
                <span>🚀</span>
                <h1>APOD!</h1>
                <DateH2>{props.date}</DateH2>
                <TitleH3>{props.title}</TitleH3>
                <ParaP>{props.explanation}</ParaP>
            </div>
        </BackgroundDiv>
    )
}
export default PhotoCard;
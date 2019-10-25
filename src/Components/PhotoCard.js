// export PhotoCard
import React from 'react';

import styled, { keyframes } from 'styled-components';

const DateH2 = styled.h2 `
    color: palevioletred;
`
const blink = keyframes`
    0% {opacity: 0}
    49%{opacity: 0}
    50% {opacity: 1}
`
const TitleH3 = styled.h3`
    color: crimson;
    animation: ${blink} 2s infinite;
`
const ParaP = styled.p`
    color: yellow;
    padding:15%;
`
const BackgroundDiv = styled.div`
    border: 10px solid yellow;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`
const rotate = keyframes `
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;
const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 4s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
`;

const glow = keyframes`
0% {
    text-shadow: 0 0 10px rgba(255,255,255,.8),
                 0 0 20px rgba(255,255,255,.8),
                 0 0 22px  rgba(255,255,255,.8),
                 0 0 40px  rgba(66,220,219,.8),
                 0 0 60px  rgba(66,220,219,.8),
                 0 0 80px  rgba(66,220,219,.5),
                 0 0 100px rgba(66,220,219,.5),
                 0 0 140px rgba(66,220,219,.5),
                 0 0 200px rgba(66,220,219,.5);
  }
  100% {
    text-shadow: 0 0 2px rgba(255,255,255,.8),
                 0 0 8px rgba(255,255,255,.8),
                 0 0 10px rgba(255,255,255,.8),
                 0 0 20px rgba(66,220,219,.8),
                 0 0 30px rgba(66,220,219,.8),
                 0 0 40px rgba(66,220,219,.8),
                 0 0 50px rgba(66,220,219,.5),
                 0 0 80px rgba(66,220,219,.5);
  }
`
const Glow = styled.h1`
    color: white;
    font-size: 6rem;
    text-align: center;
    animation: ${glow} 2s infinite
`
const PhotoCard = (props) => {

    return (
        <BackgroundDiv style={{backgroundImage:`url(${props.url})`}}>
            <div>
                <Rotate>🚀</Rotate>
                <Glow>NASA Astronomy Photo of the Day!</Glow>
                <DateH2>{props.date}</DateH2>
                <TitleH3>{props.title}</TitleH3>
                <ParaP>{props.explanation}</ParaP>
            </div>
        </BackgroundDiv>
    )
}
export default PhotoCard;
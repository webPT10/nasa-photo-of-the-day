// export PhotoCard
import React from 'react';

const PhotoCard = (props) => {

    return (
        <div style={{backgroundImage:`url(${props.url})`}}>
            <div>
                <h2>{props.date}</h2>
                <h3>{props.title}</h3>
                <p>{props.explanation}</p>
            </div>
        // </div>
    )
}
export default PhotoCard;
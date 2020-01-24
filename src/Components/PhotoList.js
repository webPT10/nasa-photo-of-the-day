// PhotoList will pull in PHotoCard via PROPs

// import PhotoCard

// set STATE -- done?

// useEffect -- done 
// import axios -- done 
// useState -- done 
// EXPORT PhotoList to App.js -- done

import React, { useState, useEffect } from "react";
import axios from 'axios';

import PhotoCard  from "./PhotoCard";

export default function PhotoList (){
    const [photos, setPhotos] = useState([])
    // console.log(photos)

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=ZzotyuagY1IjqpZCRIGxPHfYFOjfk5kSiqfQlKMY`)

            .then(response => {
                const images = response.data;
                // console.log(response)
                setPhotos(images)
            })

            .catch(error => {
                console.log(`Error, oh to ${error}`)
            });
    }, []);

    return (
        <div className='photo'>
            <PhotoCard 
                date={photos.date}
                title={photos.title}
                explanation={photos.explanation}
                url={photos.url}
            />
        </div>
    );
}

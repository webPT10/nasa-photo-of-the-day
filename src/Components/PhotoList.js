// PhotoList will pull in PHotoCard via PROPs
// set STATE
// import PhotoCard

// useEffect -- done 
// import axios -- done 
// useState -- done 
// EXPORT PhotoList to App.js -- done

import React, { useState, useEffect } from "react";

import axios from 'axios'; 

export default function PhotoList (){
    const [photo, setPhoto] = useState([])

    useEffect(() => {
    axios
        .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY`)

        .then(response => {
            console.log(response)
            setPhoto(response.data)
        })

        .catch(error => {
            console.log(`Error, oh to ${error}`)
        });
    }, []);

    return (
        <div>This is from PhotoList</div>
    )
}

import React from 'react';
import '../App.css';
import image from './images/storefront.jpg'

export function Banner() {
    return(
        <div className="banner">
            <img className="storefront" src={image} alt="storefront"></img>
            <div className="title">
                <h1>List Me</h1>
            </div>
    </div>
    )
}
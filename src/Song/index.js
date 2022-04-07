import React from "react";

import './Song.css'




function Song({children, voted, votes, name, image}) {
   
    return (
        <React.Fragment>
            <div className="container-song">
                <div> <img className='album' src={image} /></div>
                <div> <span>{name}</span></div>
                <div className="star-rating">
                    {children}
                </div>
                <div> <span className={` ${voted && 'song-voted'}`}>{votes}</span></div>

            </div>


        </React.Fragment>
    )
}

export { Song };
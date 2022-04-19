import React from "react";

import './Song.css'




function Song(props) {
   
    return (
        <React.Fragment>
          
            <div className="container-song">
                <div> <img className='album' src={props.image} /></div>
                <div> <span>{props.name}</span></div>
                <div className="star-rating">
                {props.startList.map(vote => props.render(vote))}
                </div>
                <div> <span className={` ${props.voted && 'song-voted'}`}>{props.votes}</span></div>
            </div>
        </React.Fragment>
    )
}

export { Song };
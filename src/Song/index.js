import React from "react";
import { Vote } from '../Vote'
import './Song.css'


const votes = [
    {
        value: 1
    },
    {
        value: 2
    },
    {
        value: 3
    },
    {
        value: 4
    },
    {
        value: 5
    },
]

function Song(props) {
    const { logoUrl } = props.image;
    return (
        <React.Fragment>
            <div className="container-song">
                <div> <img className='album' src={logoUrl} /></div>
                <div> <span>{props.name}</span></div>
                <div className="star-rating">
                    {votes.map(vote => (
                        <Vote key={vote.value} value={vote.value} songId={props.songId} />
                    ))}
                </div>
                <div> <span className={` ${props.voted && 'song-voted'}`}>{props.votes}</span></div>

            </div>


        </React.Fragment>
    )
}

export { Song };
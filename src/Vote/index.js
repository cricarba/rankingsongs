import React from "react";
import { SongContext } from "../SongContext";
import './vote.css'

function Vote(props) {
    const {VoteSong} = React.useContext(SongContext);
    const votar = ()=>{
        VoteSong(props.songId, props.value);
    }
    return (
        <React.Fragment>

            <input type="radio"
                name="stars"
                id={props.value}
                value={props.value}
                />
            <label for="star-a"  onClick={votar}></label>

        </React.Fragment>
    )
}
export { Vote };
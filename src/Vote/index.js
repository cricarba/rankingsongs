import React from "react";
import './vote.css'

function Vote({ VoteSong, songId, value }) {

    const votar = () => {
        VoteSong(songId, value);
    }
    return (
        <React.Fragment>

            <input type="radio"
                name="stars"
                id={value}
                value={value}
            />
            <label onClick={votar}></label>

        </React.Fragment>
    )
}
export { Vote };
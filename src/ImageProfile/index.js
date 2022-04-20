import React from "react";
function ImageProfile({votedSongs}) {
    return (
        <React.Fragment>
            <div>
                <div className='container-votes '>
                    <div className='star-rating'>
                        <input type="radio" />
                        <label>

                        </label>
                    </div>
                    <span className='votes'> {votedSongs}
                    </span>
                </div>
            </div>
        </React.Fragment>
    )
}
 
export {ImageProfile};
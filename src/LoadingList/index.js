import React from "react";
function LoadingList() {
    return (
        <React.Fragment>
            <div className="container-song">
                <div> <img className='album' /></div>
                <div> <span > </span></div>
                <div className="star-rating">

                </div>
                <div> <span className='song-voted'></span></div>
            </div>
        </React.Fragment>
    )
}


export { LoadingList };
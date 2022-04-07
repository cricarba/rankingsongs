import React from 'react'
import './Header.css'

function Header({votedSongs}) {
   
    return (
        <React.Fragment >
            <div className="container">
                <div>  <img className='icon' src='https://probitymerch.com/wp-content/uploads/2019/04/Red-Hot-Chili-Peppers-Crop-White-Probity-Merch.png'></img> </div>
                <div> <h1 className='appName'>RHCP SONGS</h1></div>
                <div> <div className='container-votes '> <div className='star-rating'><input type="radio"/><label for="star-a" ></label></div><span className='votes'> {votedSongs}</span></div></div>
            </div>
        </React.Fragment>
    )
}

export { Header };
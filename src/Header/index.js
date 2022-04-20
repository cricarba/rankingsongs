import React from 'react'
import './Header.css'

function Header({ children, votedSongs }) {

    return (
        <React.Fragment >
            <div className="container">
                {React.Children.toArray(children).map(child => React.cloneElement(child, { votedSongs }))}
            </div>
        </React.Fragment>
    )
}

export { Header };
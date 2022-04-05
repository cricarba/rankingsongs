import React from "react";
import './SearchSong.css'
import { SongContext } from "../SongContext";

function SearchSong() {
    const {searchValue, setSearchValue} = React.useContext(SongContext)
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)        
    };

    return (
        <input className="search-input" placeholder="Search song" onChange={onSearchValueChange} value={searchValue}></input>
    )
}

export { SearchSong };
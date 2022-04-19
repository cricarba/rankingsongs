import React from "react";
import './SearchSong.css'
 

function SearchSong({searchValue, setSearchValue}) {
    const onSearchValueChange = (event) => {  setSearchValue(event.target.value)  };

    return (
        <input className="search-input" placeholder="Search song" onChange={onSearchValueChange} value={searchValue}></input>
    )
}

export { SearchSong };
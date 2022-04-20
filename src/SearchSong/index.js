import React from "react";
import './SearchSong.css'


function SearchSong({ searchValue, setSearchValue, loading }) {
    const onSearchValueChange = (event) => { setSearchValue(event.target.value) };

    return (
        <input className="search-input" placeholder="Search song" onChange={onSearchValueChange} value={searchValue} disable={loading.toString()}></input>
    )
}

export { SearchSong };
import React from 'react';
import { Header } from '../Header';
import { LeaderBoard } from '../LeaderBoard';
import { SearchSong } from '../SearchSong';
import { Song } from '../Song';
import { SongContext } from '../SongContext';

function AppUI() {

    const {
        loading,
        searchValue,
        songsFilter,
        setSearchValue
    } = React.useContext(SongContext);
    
    return (
        <React.Fragment>
            <Header />
            <LeaderBoard />
            <SearchSong
                searchValue={searchValue}
                setSearchValue={setSearchValue} />

            {loading && <p>Cargando</p>}
            {(!loading && !songsFilter.length) && <p>Sin canciones</p>}

            {songsFilter.map(song => (
                <Song key={song.id}
                    name={song.name}
                    image={song.image}
                    votes={song.votes}
                    voted={song.voted}
                    songId = {song.id}
                     />
            ))}
        </React.Fragment>

    );
}

export { AppUI };

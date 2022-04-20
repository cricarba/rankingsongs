import React from 'react';
import { useSongs } from './useSongs';
import { Header } from '../Header';
import { LeaderBoard } from '../LeaderBoard';
import { SearchSong } from '../SearchSong';
import { ListSong } from '../ListSong';
import { SearchEmpty } from '../SearchEmpty'
import { Song } from '../Song';
import { Vote } from '../Vote';
import { LoadingList } from '../LoadingList';
import { Logo } from '../Logo';
import { AppName } from '../AppName';
import { ImageProfile } from '../ImageProfile';


import './App.css'


function App() {

    const {
        loading,
        searchEmpty,
        searchValue,
        songsFilter,
        setSearchValue,
        votedSongs,
        VoteSong
    } = useSongs();

    const stars = [
        {
            value: 1
        },
        {
            value: 2
        },
        {
            value: 3
        },
        {
            value: 4
        },
        {
            value: 5
        },
    ]

    return (
        <React.Fragment>
            <Header votedSongs={votedSongs} >
                <Logo />
                <AppName />
                <ImageProfile />
            </Header>
            <LeaderBoard />
            <SearchSong
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                loading={loading} />

            <ListSong
                searchEmpty={searchEmpty}
                songsFilter={songsFilter}
                VoteSong={VoteSong}
                loading={loading}
                LoadingList={() => <LoadingList />}
                SearchEmpty={() => <SearchEmpty searchText={searchValue} />}
                render={song => (
                    <Song key={song.id}
                        name={song.name}
                        image={song.image}
                        votes={song.votes}
                        voted={song.voted}
                        startList={stars}
                        render={vote => (
                            <Vote key={vote.value} value={vote.value} songId={song.id} VoteSong={VoteSong} />
                        )}
                    />

                )}
            />


        </React.Fragment>

    );
}

export default App;



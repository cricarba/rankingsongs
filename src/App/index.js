import React from 'react';
import { useSongs} from './useSongs';
import { Header } from '../Header';
import { LeaderBoard } from '../LeaderBoard';
import { SearchSong } from '../SearchSong';
import { Song } from '../Song';
import { Vote } from '../Vote'
import './App.css'

const votes = [
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


function App() {

  const {
      loading,
      searchValue,
      songsFilter,
      setSearchValue,
      votedSongs,
      VoteSong
  } = useSongs();

  return (
      <React.Fragment>
          <Header votedSongs={votedSongs} />
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
                  
              >
                  {votes.map(vote => (
                      <Vote key={vote.value} value={vote.value} songId={song.id} VoteSong={VoteSong} />
                  ))}

              </Song>
          ))}
      </React.Fragment>

  );
}

export default App;



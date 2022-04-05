import React from "react";


const SongContext = React.createContext();

const songsDefault = [
    {
        id: 1,
        image: 'https://i.pinimg.com/564x/a4/d3/b9/a4d3b99e0606b0f1624249e836072515.jpg',
        name: 'The Adventures of Rain Dance Maggie',
        votes: 0,
        voted: false
    },
    {
        id: 2,
        image: 'https://i.pinimg.com/564x/2d/26/75/2d2675d9e4ef5e562119daca532acc66.jpg',
        name: 'American Ghost Dance',
        votes: 0,
        voted: false

    },
    {
        id: 3,
        image: 'https://i.pinimg.com/564x/49/0c/53/490c53651e3366ead6bbe930ab68815f.jpg',
        name: 'Animal Bar',
        votes: 0,
        voted: true
    },

]
function SongProvider(props) {

    const [loading, setloading] = React.useState(true);
    const [votedSongs, setvotedSongs] = React.useState(true);


    const [songs, setSongs] = React.useState(songsDefault);
    const [searchValue, setSearchValue] = React.useState('');

    let songsFilter = songs.filter(song => song.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));

    const VoteSong = (id, vote) => {
        let songIndex = songs.findIndex(song => song.id === id);
        const newSongs = [...songs];
        newSongs[songIndex].voted = true;
        newSongs[songIndex].votes += vote;
        let votedSong = songs.reduce((a, b) => a + b.votes, 0)
        setSongs(newSongs);
        setloading(false);
        setvotedSongs(votedSong);
    }

    React.useEffect(() => {
        console.log("cambio la lista ordenada")
    }, [songsFilter]);

    React.useEffect(() => {
        console.log("cambio la lista votedSongs")
    }, [votedSongs]);


    return (
        <SongContext.Provider value={{
            loading,
            searchValue,
            votedSongs,
            songsFilter,
            VoteSong,
            setSearchValue

        }}>
            {props.children}
        </SongContext.Provider>
    )
}

export { SongContext, SongProvider };
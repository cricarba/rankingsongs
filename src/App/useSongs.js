import React from "react";

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

function useSongs() {
    const [searchEmpty, setsearchEmpty] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [votedSongs, setvotedSongs] = React.useState(true);
    const [songsFilter, setsongsFilter] = React.useState(songsDefault);
    const [songs, setSongs] = React.useState(songsDefault);
    const [searchValue, setSearchValue] = React.useState('');



    const VoteSong = (id, vote) => {
        let songIndex = songs.findIndex(song => song.id === id);
        const newSongs = [...songs];
        newSongs[songIndex].voted = true;
        newSongs[songIndex].votes += vote;
        let votedSong = songs.reduce((a, b) => a + b.votes, 0)
        setSongs(newSongs);
        setvotedSongs(votedSong);
    }

    React.useEffect(() => {
        let searchIsEmpty = songsFilter.length > 0;
        setsearchEmpty(searchIsEmpty);
    }, [songsFilter]);

    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            console.log(searchValue);
            let songsfilter = songs.filter(song => song.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
            setsongsFilter(songsfilter);
            setLoading(false);
        }, 1000);

    }, [searchValue, songs]);


    return {
        loading,
        searchEmpty,
        searchValue,
        votedSongs,
        songsFilter,
        VoteSong,
        setSearchValue

    };
}

export { useSongs };
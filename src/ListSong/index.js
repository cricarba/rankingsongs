import React from "react";


function ListSong(props) {

    return (
        <React.Fragment>
            {props.loading && props.LoadingList()}
            {!props.loading && !props.searchEmpty && props.SearchEmpty()}
            {!props.loading && props.songsFilter.map(song => props.render(song))}

        </React.Fragment>
    )
}

export { ListSong };
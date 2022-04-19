import React from "react";

  
function ListSong(props){
   
    return (
        <React.Fragment>
             {!props.searchEmpty && props.SearchEmpty()}
             {props.songsFilter.map(song => props.render(song))}
        
        </React.Fragment>
    )
}

export {ListSong};
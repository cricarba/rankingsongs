import React from "react";

function   SearchEmpty(props){
    return (
        <React.Fragment>
            <p className="title">There isn´t result for this search {props.searchText}</p>
        </React.Fragment>
    )
}

export {SearchEmpty};
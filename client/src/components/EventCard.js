import React from "react";

function EventCard(props){
    return (
        <div>
            <p key={props.index}>O evento {props.titulo} ocorrerá na cidade de { props.cidade }</p>
        </div>
    )
}

export default EventCard;

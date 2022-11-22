import React from "react";

function Badge(props){
    return(
        <div className="badge-container">
            <h5>Name: {props.firstName} {props.lastName}</h5>
            <h5>Email: {props.email}</h5>
            <h5>Place of Birth {props.placeOfBirth}</h5>
            <h5>Phone Number: {props.phone}</h5>
            <h5>Favorite Food: {props.favoriteFood}</h5>
            <h5>About Me: {props.about}</h5>
            
        </div>
    )
}

export default Badge;

import React from 'react'


function Person(props){
    return (
        <div className="Person-Info">
            <div className="Person-Index">
                <h1>{props.personData.id}</h1>
            </div>
            <div className="Person-Name">
                <h1>{props.personData.name.first} {props.personData.name.last}</h1>
            </div>
            <div className="Employee-Data">
            <h2>From: {props.personData.city}, {props.personData.country}</h2>
            <h2> Job Title: {props.personData.title}</h2>
            <h2>Employer: {props.personData.employer}</h2>
            </div>
            <div className="Favorite-Movies-List">
            <h2>Favorite Movies:</h2>
            <ol>
                <li>{props.personData.favoriteMovies[0]}</li>
                <li>{props.personData.favoriteMovies[1]}</li>
                <li>{props.personData.favoriteMovies[2]}</li>
                
            </ol>
            </div>
        </div>
    )
}
export default Person
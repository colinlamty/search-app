import React from "react"
import {useSelector} from "react-redux"


import "../Styles/MainContent.css"


export default function SearchContent() {
    const people = useSelector(state => state.people)

    return (
        <div className="search-content">
            <p><b>Details</b></p>
            <p>Name: {people.name}</p>
            <p>Height: {people.height}</p>
            <p>Mass: {people.mass === 0 ? "" : people.mass}</p>
            <p>Gender: {people.gender}</p>
            <p>Or I just type a very long paragraph to see what will happen in the flexbox to better prepare for the interview. Coz I did not have a solid idea about how it works in different scenario.</p>
        </div>
    )
}




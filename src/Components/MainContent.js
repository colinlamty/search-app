import React from "react"

import SearchBar from "./SearchBar"
import SearchContent from "./SearchContent"

import "../Styles/MainContent.css"

export default function MainContent(props) {
    return (
        <div className="flex-container">
            <SearchBar />
            <SearchContent  />
        </div>
    )
}



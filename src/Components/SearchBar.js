import React, {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import PeopleDisplayComponent from "./PeopleDisplayComponent"
import {addPeopleList} from "../Redux/peopleList"
import {setPeopleDetails} from "../Redux/people"
import {changePeopleToSearch} from "../Redux/peopleToSearch"
import "../Styles/MainContent.css"

export default function SearchBar() {
    const dispatch = useDispatch()
    const peopleToSearch = useSelector(state => state.peopleToSearch)

    useEffect(() => {
        dispatch(addPeopleList())
    }, [])

    const handleSearch = (event) => {
        const {value} = event.target
        dispatch(changePeopleToSearch(value))
    }

    const peopleList = useSelector(state => state.peopleList)
    const searchColumnContent = peopleList.map(people => <PeopleDisplayComponent {...people} key={people.name} />)



    return (
        <div className="search-bar">
            <div className="search-bar-content">
                <label><b>Search: </b></label>
                <input
                    type="text"
                    value={peopleToSearch}
                    name="nameSearch"
                    onChange={handleSearch}
                    placeholder="Enter name to search"
                />
                <button onClick={() => dispatch(setPeopleDetails())} style={{marginLeft: "5px"}}>Search</button>
                <hr />

                <p><b>Name List</b></p>
                {searchColumnContent}
            </div>
        </div>
    )
}




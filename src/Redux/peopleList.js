import userData from "../Data/userData"



export function addPeopleList() {
    return (dispatch, getState) => {
        const peopleList = getState().peopleList
        const importedData = userData
        console.log(importedData)
        if (peopleList.length === 0) {
            dispatch({
                type: "ADD_PEOPLE_LIST",
                payload: importedData
            })
        }
    }
}


export default function peopleListReducer(peopleList = [], action) {
    switch (action.type) {
        case "ADD_PEOPLE_LIST":
            return [...action.payload]
        default: 
            return peopleList
    }
}
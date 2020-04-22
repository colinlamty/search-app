export function changePeopleToSearch(name) {
    return (dispatch, getState) => {
        dispatch({
            type: "CHANGE_PEOPLE_TO_SEARCH",
            payload: name
        })
    }
}

export default function peopleToSearchReducer(peopleToSearch = "", action) {
    switch (action.type) {
        case "CHANGE_PEOPLE_TO_SEARCH":
            return action.payload
        default:
            return peopleToSearch
    }
}
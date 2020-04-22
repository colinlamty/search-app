export function setPeopleDetails() {
    return (dispatch, getState) => {
        const peopleList = getState().peopleList
        const nameInLower = getState().peopleToSearch.toLowerCase().trim()

        if (peopleList.some(ppl => ppl.name.toLowerCase().trim() === nameInLower || 
        ppl.name.toLowerCase().trim() === reverseString(nameInLower))) {
            const reversedName = reverseString(nameInLower)
            const target = peopleList.find(ppl => ppl.name.toLowerCase().trim() === nameInLower || 
            ppl.name.toLowerCase().trim() === reverseString(nameInLower))
            dispatch({
                type: "SET_PEOPLE_DETAILS",
                payload: target
            })
        } else {
            dispatch({
                type: "RESET_PEOPLE_DETAILS"
            })
        }
    }
}

function reverseString(name) {
    return name.split("").reverse().join("")
}

const initialState = {
    name: "",
    height: "",
    mass: 0,
    gender: ""
}

export default function peopleReducer(people = initialState, action) {
    switch (action.type) {
        case "SET_PEOPLE_DETAILS":
            console.log("inside SET_PEOPLE_DETAILS")
            return {
                ...people,
                ...action.payload
            }
        case "RESET_PEOPLE_DETAILS":
            return initialState
        default: 
            return people
    }
}



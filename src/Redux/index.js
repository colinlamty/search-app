import thunk from "redux-thunk"
import people from "./people"
import peopleToSearch from "./peopleToSearch"
import peopleList from "./peopleList"

const redux = require("redux")
const {combineReducers, createStore, applyMiddleware} = redux

const rootReducer = combineReducers({
    people,
    peopleToSearch,
    peopleList
})

const store = createStore(rootReducer, applyMiddleware(thunk))
store.subscribe(() => {
    console.log(store.getState())
})

export default store


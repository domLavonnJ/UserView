import { combineReducers } from "redux"
import PersonReducer from "./PersonReducer"

const rootReducer = combineReducers({
    personR:  PersonReducer
})

export default rootReducer
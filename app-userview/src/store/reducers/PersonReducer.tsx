
import { PersonAction } from "../actions/actions"

const initialState = {
   username: "",
   password:""
    
}

const PersonReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case PersonAction.ADD_PERSON:
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password
            }

        case PersonAction.EDIT_PERSON:
            return {
                ...state,
                password: ""
            }

        default:
            return state
    }

}

export default PersonReducer;
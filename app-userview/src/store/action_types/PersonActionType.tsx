import { PersonAction } from "../actions/actions"


const addPerson = (value: any) => {

    return {
        type: PersonAction.ADD_PERSON,
        payload: value
    }
}

const editPerson = (value: any) => {
    return {
        type: PersonAction.EDIT_PERSON,
        payload: value
    }
}


const loggedIn = (value: any) => {
    return {
        type: PersonAction.LOGGED_IN,
        payload: value
    }
}




export  {addPerson, editPerson}
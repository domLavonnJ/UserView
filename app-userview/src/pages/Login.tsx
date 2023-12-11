import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addPerson } from '../store/action_types/PersonActionType'
const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    var personS = useSelector((store: any)  => store.personR)
    var dispatch = useDispatch()

  
    const usernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
                setUsername(e.target.value)
                console.log(username)

          
        }

    const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value)
            console.log(password)
    }
    
    
    const submitHandler  = (e: React.FormEvent<HTMLFormElement>) => {
        dispatch(addPerson({username: username, password: password}))
        e.preventDefault()
    }

   


  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={submitHandler} >
            <h1>{personS.username}</h1>
            <input  value={username} onChange={usernameHandler}  type="text" placeholder="Email" />
            <input  value={password} onChange={passwordHandler}  type="text" placeholder="Password" />
            <button>Login</button>

        </form>
    </div>
  )
}

export default Login

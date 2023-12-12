import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Navigate, useNavigate,  } from 'react-router-dom'
import {addPerson, loggedIn } from '../store/action_types/PersonActionType'
const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isRedirect, setIsRedirect] = useState(false)
    const navigate = useNavigate()
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
        if(personS.username === username && personS.password === password) {
           dispatch(loggedIn({isLoggedIn: true}))

           setTimeout(() => {
             setIsRedirect(true)
             navigate("/home")

           }, 500);
        }
        e.preventDefault()
    }

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={submitHandler} >
            <input  value={username} onChange={usernameHandler}  type="text" placeholder="Email" />
            <input  value={password} onChange={passwordHandler}  type="text" placeholder="Password" />
            <button>Login</button>
        </form>

        <p>Need an account? <Link to={"/register"} > Register </Link>    </p>
    </div>
  )
}

export default Login
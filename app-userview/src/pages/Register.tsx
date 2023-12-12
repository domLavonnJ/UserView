import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addPerson } from '../store/action_types/PersonActionType'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

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
        navigate("/")
    }

  return (
    <div>

    <h1>Register</h1>
    <form onSubmit={submitHandler} >
    <input  value={username} onChange={usernameHandler}  type="text" placeholder="Email" />
    <input  value={password} onChange={passwordHandler}  type="text" placeholder="Password" />
    <button>Register</button>

    <p>Already have an accout? <Link to={"/"}> Login </Link></p>
</form>
</div>

  )
}

export default Register

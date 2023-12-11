import React, {useState} from 'react'

const Register = () => {
  return (
    <div>
    <h1>Register</h1>
    <form onSubmit={submitHandler} >
    <input  value={username} onChange={usernameHandler}  type="text" placeholder="Email" />
    <input  value={password} onChange={passwordHandler}  type="text" placeholder="Password" />
    <button>Register</button>

</form>
</div>
  )
}

export default Register

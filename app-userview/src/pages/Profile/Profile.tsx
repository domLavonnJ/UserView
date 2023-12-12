import React from 'react'
import { Link , Outlet} from 'react-router-dom'
const  Profile = () => {
  return (
    <div>
        <h1> Profile Outer </h1>

        <Link to="innerprofile">Profile</Link>
        <Link to="account">Account</Link>

        <h1>lsdsk</h1>
        <div>
          <Outlet />
        </div>

    </div>
  
  )
}

export default Profile
import React, {useState} from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Register from './pages/Register';
import Login from './pages/Login';
import Homes from './pages/Homes';
import List from './pages/List/List';
import ListItem from './pages/List/ListItem';
import Profile from './pages/Profile/Profile';
import Error from './pages/Error';
import './App.css';
import InnerProfile from './pages/Profile/InnerProfile';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const personS = useSelector((store: any) => store.personR   )
  const NavBar = () => {
    return (<nav>
      <ul>
        <Link to="/home" className="list">
          Home
        </Link>
        <Link to="/list" className="list">
          List
        </Link>
        <Link to="/profile" className="list">
          Profile
        </Link>
      </ul>
    </nav>

    )
  }
  return (
    <div className="App">
      {personS.isloggedIn &&  <NavBar />} 
 
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Homes />} />
        <Route path="/list" element={<List />}>
          <Route path="/list/:id" element={<ListItem />} />
        </Route>
        <Route path="/profile" element={<Profile />}>
          <Route index path="innerprofile" element={<InnerProfile />} />
        </Route>
        <Route path="/*" element={<Error />}/>
     </Routes>
    
    </div>
  
  );
}

export default App;

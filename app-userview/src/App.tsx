import React, {useState} from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Homes from './pages/Homes';
import List from './pages/List/List';
import ListItem from './pages/List/ListItem';
import './App.css';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const NavBar = () => {
    return (<nav>
      <ul>
        <Link to="/home" className="list">
          Home
        </Link>
        <Link to="/list" className="list">
          List
        </Link>
      </ul>
    </nav>

    )
  }
  return (
    <div className="App">
      {isLoggedIn &&  <NavBar />} 
 
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Homes />} />
        <Route path="/list" element={<List />}>
          <Route path="/list/:id" element={<ListItem />} />
        </Route>

     </Routes>
    
    </div>
  
  );
}

export default App;

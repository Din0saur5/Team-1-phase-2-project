
import { useEffect, useState  } from 'react';
import GamerForm from '../components/GamerForm';
import Navbar from "../components/Navbar.jsx"
import Countdown from "../components/countdown.jsx"
import SearchBar from "../components/SearchBar.jsx"
import '../components/SignUp.css'
import UserList from '../components/UserList.jsx';





const SignUp = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
 
  useEffect(() => {
  
    fetch(`http://localhost:3000/profiles?q=${query}`)
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }, [query]); 


  function handleSearch() {
    fetch('http://localhost:3000/profiles')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }
  return (
    <div className="signup-page"> 
      <Navbar />
      <Countdown />
      <SearchBar handleSearch={handleSearch} className="search-bar" />
      <UserList users={users} />
      <div className="signup-container"> 
        <h2>Sign Up</h2>
        <p>Fill in the form below:</p>
        <GamerForm users={users} setUsers={setUsers} className="gamer-form" /> 
      </div>
    </div>
  );
}

export default SignUp
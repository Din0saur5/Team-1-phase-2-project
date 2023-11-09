
import { useEffect, useState  } from 'react';
import GamerForm from '../components/GamerForm';
import Navbar from "../components/Navbar.jsx"
import Countdown from "../components/countdown.jsx"
import SearchBar from "../components/SearchBar.jsx"
import '../components/SignUp.css'
import UserList from '../components/UserList.jsx';
import { Col, Container, Row } from 'react-bootstrap';





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
      <Navbar currentPage= {"/sign-up"} />
      <Countdown currentPage= {"sign-up"} />
      <Container>
      <Row style={{marginTop:'5%', alignItems: 'flex-end'}}>
      <Col style={{marginLeft:'61%'}}>
        <div className="signup-container"> 
        <h2>Register</h2>
        <p>Get the latest updates, connect with Players!</p>
        <GamerForm users={users} setUsers={setUsers} className="gamer-form" /> 
      </div></Col>
        
        <Col md={{span:6, offset:-1}}><SearchBar handleSearch={handleSearch} className="search-bar" /></Col>
      </Row>
      <Row>
        <Col sm><UserList users={users} /></Col>
        
      </Row>
    </Container>

      
      
     
    </div>
  );
}

export default SignUp
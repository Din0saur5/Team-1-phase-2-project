
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
  const [searchQuery, setSearchQuery] = useState({
    gamertag: '',
    console: '',
    region: '',
  });
  
  useEffect(()=>{
  
    fetch(`http://localhost:3000/profiles`)
      .then((resp) => resp.json())
      .then((data) =>{ setUsers(data)
        console.log(users)
        })
      }, []); 

const handleSearch = (search) => {
  setSearchQuery(search)
  console.log(searchQuery)
  
  
  }


 console.log(users) 

let regionFilter
let consoleFilter
let nameFilter
  if(searchQuery.region !== ""){
    regionFilter = users.filter(user=>user.region === searchQuery.region) 
    console.log(regionFilter)
  } else{regionFilter= users}
  if(searchQuery.console !== ''){ 
    consoleFilter = regionFilter.filter(user=>user.console === searchQuery.console)
    console.log(consoleFilter)
  } else{consoleFilter=regionFilter}
  if(searchQuery.gamertag !== ''){ //want it to be case Sensitive
    nameFilter = consoleFilter.filter(user=>user.gamertag.includes(searchQuery.gamertag)) 
   
  }else{nameFilter=consoleFilter}

  let filteredUsers = nameFilter




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
        <Col sm><UserList users={filteredUsers} /></Col>
        
      </Row>
    </Container>

      
      
     
    </div>
  );
}

export default SignUp
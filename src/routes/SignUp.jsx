import React from 'react'
import { useEffect, useState  } from 'react';
import GamerForm from '../components/GamerForm';
import Navbar from "../components/Navbar.jsx"

const SignUp = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // note to self to remember to fetch initial data from API and update formData
    fetch("http://localhost:3000/profile")
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }, []); 



  return (
    <div>
      <Navbar/>
      <h2>Sign Up</h2>
      <p>Fill in the form below:</p>
     <GamerForm />
    </div>
  )
}

export default SignUp

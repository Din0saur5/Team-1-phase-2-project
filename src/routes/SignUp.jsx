import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
      
      <p>Hello World</p>
      <Link to='/'>home</Link>
      <br/>
       <Link to='/About'>about</Link>
       <br/>
       <Link to='/SignUp'>sign-up</Link>
    </div>
  )
}

export default SignUp

import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <p>Hello World</p>
      <Link to='/'>home</Link>
      <br/>
       <Link to='/about'>about</Link>
       <br/>
       <Link to='/sign-up'>sign-up</Link>
    </div>
  )
}

export default About

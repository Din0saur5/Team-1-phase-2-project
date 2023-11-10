import React, { useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";

function UserList({ users, handleRemove }) {
  const[emailAuth, setEmailAuth] = useState('')
  const [currentSelected, setCurrentSelected] =useState({})
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (user) => 
  { 
    setCurrentSelected(user)
    setShow(true);
  }
  function handleChange(e){
    setEmailAuth(e.target.value)
  }

  function handleLeave(e){
      e.preventDefault()
    if (emailAuth=== currentSelected.email){
      handleRemove(currentSelected) 
      
      console.log("works")
    } else{alert("Incorrect email")}

    e.target.reset()
   setEmailAuth('')
    setCurrentSelected({})
    handleClose()
  }


  return (
    <>
    <div>
      <Table striped hover variant="dark" style={{width:"65vw"}}>
        <thead >
          <tr >
            <th style={{ color:'#FFA500'}}>Queue</th>
            <th style={{ color:'#FFA500', width:"25vw"}}>Gamertag</th>
            <th style={{ color:'#FFA500'}}>Console</th>
            <th style={{ color:'#FFA500'}}>Region</th>
            <th style={{ color:'#FFA500', width:"5vw"}}>Leave Line</th>
          </tr>
        </thead>
        <tbody>
          {users.length !== 0? users.map(user => {
          return(
          <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.gamertag}</td>
              <td>{user.console}</td>
              <td>{user.region}</td>
              <td style={{paddingRight:0}}><Button onClick={()=>{handleShow(user)}} style={{margin: '0 5% 0 0', padding:'2% 8% 2% 8%',}} variant="danger">x</Button></td>
            </tr>
          )})
        :
        <tr>
          <td>#</td>
          <td>NO GAMERS FOUND</td>
          <td>n/a</td>
          <td>n/a</td>
          <td>x</td>
        </tr>
        }
        </tbody> 
      </Table>
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to leave the Queue?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      
          <form onSubmit={(e)=>{handleLeave(e)}} value={emailAuth}>
         
              <label style={{color:'black'}}>Enter the Email address associated with {currentSelected.gamertag}</label>
              <input
              style={{borderRadius:0}}
                value={emailAuth}
                type="text"
                placeholder="name@example.com"
                onChange={(e)=>handleChange(e)}
              />
              <br/>
              <small>
                This will also remove you from our Newsletter
              </small>
              <br/>
              <Button variant="danger" type='submit'>
            Leave Queue
          </Button>
            
          </form>
        </Modal.Body>
       
      </Modal>

    </>

  );
}

export default UserList;



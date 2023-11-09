import React from "react";
import { Table } from "react-bootstrap";

function UserList({ users }) {
  return (
    <div>
      <Table striped hover variant="dark">
        <thead >
          <tr >
            <th style={{ color:'#FFA500'}}>ID</th>
            <th style={{ color:'#FFA500'}}>Gamertag</th>
            <th style={{ color:'#FFA500'}}>Console</th>
            <th style={{ color:'#FFA500'}}>Region</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.gamertag}</td>
              <td>{user.console}</td>
              <td>{user.region}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UserList;



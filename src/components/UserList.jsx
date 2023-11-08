import React from "react";

function UserList({ users }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Gamertag</th>
            <th>Console</th>
            <th>Region</th>
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
      </table>
    </div>
  );
}

export default UserList;



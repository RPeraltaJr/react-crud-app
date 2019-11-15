import React, { useState, Fragment } from 'react'
import UserTable from './components/tables/UserTable'
import AddUserForm from './components/forms/AddUserForm'
import EditUserForm from './components/forms/EditUserForm'
import './App.scss'
const randomInt = require('random-int');

function App() {

  const userData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]
  const initialFormState = { id: null, name: '', username: '' }

  const [users, setUsers] = useState(userData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user) => {
    user.id = randomInt(100);
    setUsers([...users, user]);
    // console.log(user);
  }

  const deleteUser = (id) => {
    setEditing(false);
    setUsers(users.filter(user => user.id !== id)); // return all users who id does not match
  }

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  }

  const updateUser = (id, updatedUser) => {
    // console.log(updatedUser);
    setUsers(users.map(user => (user.id === id ? updatedUser : user )));
    setEditing(false);
    
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">

          { editing === true ? (
            <Fragment>
              <h2>Edit user</h2>
              <EditUserForm currentUser={currentUser} updateUser={updateUser} setEditing={setEditing} />
            </Fragment>
          )
            : (
              <Fragment>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </Fragment>
            )
          }

        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;

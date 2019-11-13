import React, { useState } from 'react'

export default function AddUserForm({ addUser }) {

    const initialFormState = { id: null, name: '', username: '' }
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = (e) => {
        const { name, value } = e.target; // get input name & value
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if( !user.name || !user.username ) return // validation: check if name/username is empty

        addUser(user);
        setUser(initialFormState); // reset form
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} />
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={handleInputChange} />
            <button type="submit">Add new user</button>
        </form>
    )
}

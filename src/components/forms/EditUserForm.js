import React, { useState, useEffect } from 'react'

export default function EditUserForm({ currentUser, updateUser, setEditing }) {

    const [user, setUser] = useState(currentUser);

    useEffect(() => {
        setUser(currentUser);
    }, [currentUser]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(user.id, user);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} />
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={handleInputChange} />
            <button type="submit">Update user</button>
            <button onClick={() => setEditing(false)} className="button muted-button">Cancel</button>
        </form>
    )
}

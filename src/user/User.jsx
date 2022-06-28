import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const User = () => {
    const [users, setUsers] = useState([])

    const fetchUser = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        await setUsers(response.data)
    }

    useEffect( () => {
        fetchUser()
    }, [])

    return (
        <div data-testid="users-page">
            {users.map(user => <Link
                style={{display: 'block'}}
                to={`/users/${user.id}`}
                key={user.id}
                data-testId="div-test">
                {user.id} {user.name}
            </Link>)}
        </div>
    );
};

export default User;
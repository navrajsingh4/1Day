import React, { useEffect, useState } from "react";
import axios from 'axios';

function Users () {
    const [users, setUsers] = useState([]);    

    useEffect(() => {
        axios.get('http://localhost:3001/')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date</th>
                        <th>Nationality</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    users.map((user) => {
                        return
                        <tr>
                            <td>{user.Name}</td>
                            <td>{user.Email}</td>
                            <td>{user.Phone}</td>
                            <td>{user.Date}</td>
                            <td>{user.Nationality}</td>
                            <td><button>Edit</button></td>
                        </tr>
                    })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Users;

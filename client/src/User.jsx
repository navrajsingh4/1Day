import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users () {
    const [users,SetUsers]=useState([])    
    useEffect(()=>{
        axios.get('http://localhost:3001/')
        .then(result => SetUsers(result.data))
        .catch(err => console.log(err))
    },[])
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
                    
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((display)=>{
                            return <tr>
                                <td>{display.name}</td>
                                <td>{display.email}</td>
                                <td>{display.phone}</td>
                                <td>{display.date}</td>
                                <td>{display.nationality}</td>
                                <td>
                               <Link to={`/update/${users._id}`}><button>Edit</button></Link> 
                                </td>
                            </tr>
                        }
                    )
                    }

                </tbody>
            </table>
        </div>
    )
}
export default Users;
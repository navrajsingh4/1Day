import React, { useState } from "react";

function Users () {
    const [users,SetUsers]=useState([{Name:"Navraj", Email:"snavraj663@gmail.com", Age:19}])    
    return (
        
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((display)=>{
                            return <tr>
                                <td>{display.Name}</td>
                                <td>{display.Email}</td>
                                <td>{display.Age}</td>
                                <td><button>Edit</button></td>
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
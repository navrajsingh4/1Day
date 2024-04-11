import React, { useEffect,useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import  axios  from "axios"
import './UpdateUsers.css'

function UpdateUsers() {
    const {id} = useParams()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [nationality, setNationality] = useState("");
    const navigate= useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:3001/getUser/' +id)
        .then(result => {console.log(result)
            setName(result.data.name)
            setEmail(result.data.email)
            setPhone(result.data.phone)
            setDate(result.data.date)
            setNationality(result.data.nationality)
        
        })
        .catch(err => console.log(err))
    },[])


    /*const handleSubmit = (event) => {
        event.preventDefault();
        // Perform axios request to update user details
        // For simplicity, assuming a POST request to a specific endpoint for updating user details
        axios.post('http://localhost:3001/update', {
            name: name,
            email: email,
            phone: phone,
            date: date,
            nationality: nationality
        })
        .then(response => {
            // Handle successful update
            console.log("User details updated successfully!");
        })
        .catch(error => {
            // Handle error
            console.error("Error updating user details:", error);
        });
    }; */


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/updateUser/"+id,{name,email,phone,date,nationality})
        .then(result => {
            console.log(result)
            navigate('/')
            })
        .catch(err => console.log(err))
    }





    return (
        <div>
                        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link className="navbar-brand" to="/">Users App</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link btn btn-primary" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-primary" to="/create">Create User</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-primary" to="/update">Update User</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Phone:
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Date:
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Nationality:
                    <input
                        type="text"
                        value={nationality}
                        onChange={(e) => setNationality(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Update User</button>
            </form>
        </div>
    );
}

export default UpdateUsers;
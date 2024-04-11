import React, { useEffect,useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import  axios  from "axios"

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

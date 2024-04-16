import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./navbar";
import './ProfilePage.css'

const ProfilePage = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [nationality, setNationality] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/getUser/' + id)
        .then(result => {
            console.log(result);
            const { name, email, phone, date, nationality } = result.data;
            setName(name);
            setEmail(email);
            setPhone(phone);
            setDate(date);
            setNationality(nationality);
        })
        .catch(err => console.log(err));
}, [id]);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };
  return (
    <>
    <div><Navbar/>
    <div className="profile">
      <div className="display">
      <img src="../public/profile.png" alt="Profile Picture" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
      <h1>{name}</h1>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Date: {formatDate(date)}</p>
      <p>Nationality: {nationality}</p>
      <br/>
      <Link className="text-white text-decoration-none" to={`/update/${id}`}><button className="edit">Edit Profile</button></Link>
    </div>
    </div>
    </div>
    </>
  );
};

export default ProfilePage;
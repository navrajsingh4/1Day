import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

function Search() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadUsers();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const searchRegex = new RegExp(searchTerm.replace(/[^a-zA-Z0-9]/g, ''), 'i');
      const searchResults = users.filter(user => {
        const name = String(user.name).replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const nationality = String(user.nationality).replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const email = String(user.email).replace(/[^a-zA-Z0-9@.]/g, '').toLowerCase();
        const phone = String(user.phone).replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        return searchRegex.test(name) ||
               searchRegex.test(nationality) ||
               searchRegex.test(email) ||
               searchRegex.test(phone);
      });
      setFilteredUsers(searchResults);
    } else {
      setFilteredUsers(users);
    }
  }, [searchTerm, users]);

  const loadUsers = () => {
    axios.get("http://localhost:3001/")
      .then((result) => {
        setUsers(result.data);
        setFilteredUsers(result.data);
      })
      .catch((err) => console.log(err));
  };

  const onSearch = () => {
    setSearchTerm(searchTerm.trim());
  };

  const onChangeSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const onDeleteUser = (userId) => {
    axios.delete(`http://localhost:3001/deleteUser/${userId}`)
      .then(() => loadUsers())
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <div className="users-container">
        <div className="header-title">
          <input
            type="text"
            placeholder="Search by name, nationality, email, or phone..."
            value={searchTerm}
            onChange={onChangeSearchInput}
            className="search-input"
          />
          <button className="search-btn" onClick={onSearch}>Search</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Nationality</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.nationality}</td>
                <td>
                  <Link to={`/update/${user._id}`} className="action-btn edi">Edit</Link>
                  <button
                    className="action-btn delete"
                    onClick={() => onDeleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4"><b>Total Students</b></td>
              <td><b>{filteredUsers.length}</b></td>
            </tr>
          </tfoot>
        </table>
      </div>
      <style>{`
        .users-container {
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .header-title {
          text-align: center;                   
          margin: 20px 0;                
          font-weight: bold;
        }

        .search-input {
          padding: 10px;
          margin-bottom: 20px;
          border-radius: 4px;
          border: 1px solid #ccc;
          width: calc(100% - 120px);
        }

        .search-btn {
          padding: 10px 20px;
          margin-left: 10px;
          background-color: cyan;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .table {
          width: 100%;
          border-collapse: collapse;
        }

        .table th, .table td {
          text-align: left;
          padding: 8px;
          border-bottom: 1px solid #ddd;
        }

        .table th {
          background-color: #f2f2f2;
        }

        .action-btn {
          margin-right: 5px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          padding: 5px 10px;
        }

        .edi {
          background-color: skyblue;
        }

        .delete {
          background-color: #F44336; 
          color: white;
        }

        .search-btn:hover, .action-btn:hover {
          opacity: 0.8;
        }
      `}</style>
    </>
  );
}

export default Search;

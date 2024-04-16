import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./navbar";

function Search() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

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

  const navigateToCreateUser = () => {
    navigate("/create");
  };

  const navigateToFilters = () => {
    navigate("/filter");
  };

  return (
    <>
      <Navbar />
      <div className="search-container">
        <div className="search-header">
          <input
            type="text"
            placeholder="Search by name, nationality, email, or phone."
            value={searchTerm}
            onChange={onChangeSearchInput}
            className="search-input"
          />
          <button className="green-btn" onClick={onSearch}>Search</button>
        </div>
        <div className="button-group">
          <button className="green-btn" onClick={navigateToFilters}>Filters</button>
          <button className="green-btn" onClick={navigateToCreateUser}>Create New Guest</button>
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
                  <Link to={`/update/${user._id}`} className="action-btn edit">Edit</Link>
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
        </table>
      </div>
      <style>{`
        .search-container {
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .search-header {
          text-align: center;
          margin-bottom: 20px;
        }

        .search-input {
          padding: 10px;
          border-radius: 4px;
          border: 1px solid #ccc;
          width: calc(100% - 240px);
          margin-right: 10px;
        }

        .green-btn {
          background-color: #4CAF50;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin-right: 10px;
          margin-bottom: 20px;
          float: right;
        }

        .button-group {
          text-align: center;
          margin-bottom: 20px;
        }

        .table {
          width: 100%;
          border-collapse: collapse;
        }

        .table th, .table td {
          padding: 8px;
          border-bottom: 1px solid #ddd;
        }

        .table th {
          background-color: #f2f2f2;
        }

        .action-btn.edit {
          background-color: skyblue;
          color: white;
          padding: 5px 10px;
          border-radius: 4px;
          text-decoration: none;
          margin-right: 5px;
        }

        .action-btn.delete {
          background-color: #F44336;
          color: white;
          padding: 5px 10px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
        }

        .green-btn:hover,
        .action-btn.edit:hover,
        .action-btn.delete:hover {
          opacity: 0.8;
        }
      `}</style>
    </>
  );
}

export default Search;
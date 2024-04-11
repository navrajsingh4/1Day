import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Navbar from './navbar';

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <Navbar />
      </header>
      <main className="main">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 text-center">
              <h1 className="display-4 mb-4">Students Entering Stan Grad</h1>
                <p className='lead'>Keeping track of the number of students entering a college building is crucial for ensuring safety, security, and efficient resource management. By maintaining accurate records of student entries, colleges can effectively monitor and control access to the premises, especially during emergencies or times of heightened security concerns. This data also aids in managing facility capacity, enabling administrators to prevent overcrowding and maintain a conducive learning environment. Additionally, tracking student entries facilitates contact tracing efforts in case of contagious disease outbreaks, helping to contain the spread and safeguard the health of the college community. Overall, maintaining records of student entries plays a vital role in promoting safety, security, and well-being on campus.</p>
              <Link to="/Users" className="btn btn-primary btn-lg mb-3">View Students</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const LoginPage = () => {
  const handleUserLogin = () => {
    window.location.href = 'http://localhost:3000/user';
    console.log('User login');
    // Add your user login logic here
  };

  const handleAdminLogin = () => {
    window.location.href = 'http://localhost:3000/Admin';
    console.log('Admin login');
    // Add your admin login logic here
  };
  const divStyle = {
    backgroundImage: 'url("path_to_your_image.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '300px',
    height: '200px',
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100" > 
    <div className="card">
      <div className="card-body">
        <h1 className="card-title text-center" style={{ fontSize: '24px' }}>Login Page</h1>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter your password" />
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-primary" onClick={handleUserLogin}>
            Login as User
          </button>
          <button className="btn btn-primary" onClick={handleAdminLogin}>
            Login as Admin
          </button>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default LoginPage;





import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const LoginPage = () => {
  const handleUserLogin = () => {
    console.log('User login');
    // Add your user login logic here
  };

  const handleAdminLogin = () => {
    console.log('Admin login');
    // Add your admin login logic here
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title text-center" style={{ fontSize: '24px' }}>Login Page</h1>
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






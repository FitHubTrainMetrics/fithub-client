import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './Login.css';

const Login: React.FC = () => {
  return (
    <div className="login">
      <h2 className="login-title">Login</h2>
      <LoginForm />
    </div>
  );
};

export default Login;

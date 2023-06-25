import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import './Registration.css';

const Registration: React.FC = () => {
  return (
    <div className="registration">
      <h2 className="registration-title">Cadastro</h2>
      <RegistrationForm />
    </div>
  );
};

export default Registration;

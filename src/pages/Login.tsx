import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/Login/LoginForm';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="login" className="relative">
      <div className="flex justify-center w-full h-screen relative">
        <div className="bg-gradient-to-b from-white to-white shadow-xl w-full max-w-[45rem] h-full px-[1.75rem] md:px-[1.25rem] relative z-20">
          <div className="spacer-xs"></div>
          <div className="spacer-small"></div>
          <div className="spacer-small"></div>
          <div className="spacer-medium hidden md:block"></div>

          <div className="w-full flex flex-col justify-start items-center">
            <span className="text-[48px] text-[#282828] font-[extra-light-italic]">
              Kludy
            </span>
            <div className="spacer-small"></div>
            <div className="spacer-medium"></div>
            <span className="text-[48px] text-[#282828] font-[semi-bold]">
              Login
            </span>
            <div className="spacer-medium"></div>
            <LoginForm />
            <div className="spacer-medium"></div>
            <div className="spacer-small"></div>
            <div
              className="cursor-pointer text-blue-700 font-[regular] hover:underline"
              onClick={() => navigate('/forgot')}
            >
              Forgot Password?
            </div>
            <div className="spacer-medium"></div>
            <div className="spacer-small"></div>
            <div className="w-[320px] md:w-[400px] h-[1px] bg-gray-300"></div>
            <div className="spacer-medium"></div>
            <span className="text-[14px] font-[extra-light] tracking-wider">
              All Rights Reserved.
            </span>
            <div className="spacer-small"></div>
            <span className="text-[14px] font-[extra-light] tracking-wider">
              Kludy Ramirez
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;

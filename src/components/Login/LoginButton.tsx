import React from 'react';
import { useLogoutMutation } from '../../features/api/Auth';

const LogoutButton: React.FC = () => {
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    await logout();
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;

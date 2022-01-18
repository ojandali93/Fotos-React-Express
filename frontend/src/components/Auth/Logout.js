import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Logout({ handleLogout }) {
  const navigate = useNavigate();
  React.useEffect(() => {
    handleLogout();
    navigate("/", { replace: true });
  }, []);

  return null;
};

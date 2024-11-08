import { useUser } from '@clerk/clerk-react';
import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function Default() {
    const { isSignedIn } = useUser();
  const navigate = useNavigate();
const location = useLocation()
  console.log('isSignedIn', isSignedIn);

  useEffect(() => {
    if (isSignedIn) {
      navigate('/kanban');
    } else {
        if (location.pathname === "/login") return
        navigate('/blocked')
    }
  }, [isSignedIn, navigate]);
  return (
    <div>
   <Outlet />   
    </div>
  )
}

export default Default

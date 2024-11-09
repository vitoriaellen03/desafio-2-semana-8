import { Navigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { isSignedIn } = useAuth();

  return (
    isSignedIn ? children : <Navigate to="/BlockedPage" />
  )
};

export default PrivateRoute;

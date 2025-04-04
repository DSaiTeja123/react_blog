import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    const verifyAccess = () => {
      // If the route requires authentication and user is NOT authenticated
      if (authentication && !authStatus) {
        navigate("/login");
      }

      // If the route is for non-authenticated users only (like Login/Signup) and user IS authenticated
      if (!authentication && authStatus) {
        navigate("/");
      }

      setLoading(false);
    };

    verifyAccess();
  }, [authStatus, navigate, authentication]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800">Loading...</h1>
          <p className="mt-2 text-gray-600">Please wait while we verify your access.</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

import { useEffect, useState } from "react";
import axios from "axios";

const useAuthStatus = () => {
  const [authStatus, setAuthStatus] = useState({ isAuthenticated: false, user: null });

  useEffect(() => {
    const fetchAuthStatus = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_PROXY_URL}/api/auth/status`, { withCredentials: true });
        setAuthStatus(response.data);
      } catch (error) {
        console.error("Error fetching auth status", error);
      }
    };

    fetchAuthStatus();
  }, []);

  return authStatus;
};

export default useAuthStatus;

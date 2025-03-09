import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth"; // ✅ Import useAuth

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // ✅ Use useAuth to check authentication

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
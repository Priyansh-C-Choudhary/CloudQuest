import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const RoleProtectedRoute = ({ children, allowedRoles }) => {
	const { isAuthenticated, user } = useAuthStore();

	// Redirect if not authenticated
	if (!isAuthenticated) {
		return <Navigate to="/login" replace />;
	}

	// Redirect if user does not have the required role
	if (!allowedRoles.includes(user.role)) {
		return <Navigate to="/" replace />;
	}

	return children;
};

export default RoleProtectedRoute;

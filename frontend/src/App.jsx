import { Navigate, Route, Routes } from "react-router-dom";
import FloatingShape from "./components/FloatingShape";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import DashboardPage from "./pages/DashboardPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import InformationPage from "./pages/InformationPage";
import LearningPage from "./pages/LearningPage";
import BlankPage from "./pages/BlankPage";
import CloudPage from "./pages/CloudPage"
import CollaboratorPage from "./pages/CollaboratorPage";
import DevOpsTable from "./pages/DevOpsPage";
import TerraformRoadmap from "./pages/DevOpsTools/TerraformRoadmap";
import DockerRoadmap from "./pages/DevOpsTools/DockerRoadmap";

import RoleProtectedRoute from "./components/RoleProtectedRoute";
import LoadingSpinner from "./components/LoadingSpinner";

import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";




// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (!isAuthenticated) {
		return <Navigate to='/login' replace />;
	}

	if (!user.isVerified) {
		return <Navigate to='/verify-email' replace />;
	}

	return children;
};

// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (isAuthenticated && user.isVerified) {
		return <Navigate to='/' replace />;
	}

	return children;
};

function App() {
	const { isCheckingAuth, checkAuth } = useAuthStore();

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	if (isCheckingAuth) return <LoadingSpinner />;

	return (
		<div
			className='min-h-screen bg-gradient-to-br
    from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden'
		>
			<FloatingShape color='bg-green-500' size='w-64 h-64' top='-5%' left='10%' delay={0} />
			<FloatingShape color='bg-emerald-500' size='w-48 h-48' top='70%' left='80%' delay={5} />
			<FloatingShape color='bg-lime-500' size='w-32 h-32' top='40%' left='-10%' delay={2} />

			<Routes>
				<Route
					path='/'
					element={
						<ProtectedRoute>
							<DashboardPage />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/collaborator"
					element={
						<RoleProtectedRoute allowedRoles={['collaborator']}>
							<CollaboratorPage />
						</RoleProtectedRoute>
					}
				/>
				<Route
					path='/signup'
					element={
						<RedirectAuthenticatedUser>
							<SignUpPage />
						</RedirectAuthenticatedUser>
					}
				/>
				<Route
					path='/login'
					element={
						<RedirectAuthenticatedUser>
							<LoginPage />
						</RedirectAuthenticatedUser>
					}
				/>
				<Route path='/verify-email' element={<EmailVerificationPage />} />
				<Route
					path='/forgot-password'
					element={
						<RedirectAuthenticatedUser>
							<ForgotPasswordPage />
						</RedirectAuthenticatedUser>
					}
				/>

				<Route
					path='/reset-password/:token'
					element={
						<RedirectAuthenticatedUser>
							<ResetPasswordPage />
						</RedirectAuthenticatedUser>
					}
				/>

				<Route
					path='/user-information'
					element={
						<ProtectedRoute>
							<InformationPage />
						</ProtectedRoute>
					}
				/>

				<Route
					path='/learning'
					element={
						<ProtectedRoute>
							<LearningPage />
						</ProtectedRoute>
					}
				/>

				<Route
					path='/devops'
					element={
						<ProtectedRoute>
							<DevOpsTable />
						</ProtectedRoute>
					}
				/>

				<Route
					path='/cloud'
					element={
						<ProtectedRoute>
							<CloudPage />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/terraform-roadmap'
					element={
						<ProtectedRoute>
							<TerraformRoadmap />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/docker-roadmap'
					element={
						<ProtectedRoute>
							<DockerRoadmap />
						</ProtectedRoute>
					}
				/>
				
				/terraform-roadmap
				{/* catch all routes */}
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
			<Toaster />
		</div>
	);
}

export default App;

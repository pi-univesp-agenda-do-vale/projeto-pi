import { React } from "react";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import UsersPage from "./pages/DashboardPage/Users";
import EventsPage from "./pages/DashboardPage/Events";
import CategoryPage from "./pages/DashboardPage/Category";

import { AuthProvider, AuthContext } from "./contexts/auth";
import { useContext } from "react";

const AppRoutes = () => {

    const Private = ({children}) => {
        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return <div className="loading">Carregando...</div>
        }
        if (!authenticated) {
            return <Navigate to="/login"/>
        }

        return children;
    }
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/dashboard" element={<Private><DashboardPage /></Private>} />
                    <Route exact path="/dashboard/users" element={<Private><UsersPage /></Private>} />
                    <Route exact path="/dashboard/events" element={<Private><EventsPage /></Private>} />
                    <Route exact path="/dashboard/categories" element={<Private><CategoryPage /></Private>} />
                    
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default AppRoutes;
import { React } from "react";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import EventsHomePage from './pages/HomePage/event.jsx'
import DashboardPage from './pages/DashboardPage';
import UsersPage from "./pages/DashboardPage/Users";
import UsersView from "./pages/DashboardPage/UsersView";
import EventsPage from "./pages/DashboardPage/Events";
import EventsView from "./pages/DashboardPage/EventsView";
import CategoryPage from "./pages/DashboardPage/Categories";
import CategoriesView from "./pages/DashboardPage/CategoriesView";

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
                    <Route path="/evento/:id" element={<EventsHomePage />} />
                    <Route exact path="/dashboard" element={<Private><DashboardPage /></Private>} />
                    <Route exact path="/dashboard/users" element={<Private><UsersPage /></Private>} />
                    <Route exact path="/dashboard/events" element={<Private><EventsPage /></Private>} />
                    <Route exact path="/dashboard/categories" element={<Private><CategoryPage /></Private>} />                    
                    <Route exact path="/dashboard/eventsview" element={<Private><EventsView /></Private>} />                    
                    <Route exact path="/dashboard/categoriesview" element={<Private><CategoriesView /></Private>} />                    
                    <Route exact path="/dashboard/usersview" element={<Private><UsersView /></Private>} />                    
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default AppRoutes;
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Transactions from './pages/Transactions';

import './styles/global.css';

const PrivateAdminRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    const rol = localStorage.getItem('rol');

    if (!token || rol !== 'ADMIN') {
        return <Navigate to="/login" replace />;
    }

    return children;
};

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Ruta pública */}
                <Route path="/login" element={<Login />} />

                {/* Ruta inicial */}
                <Route path="/" element={<Navigate to="/login" replace />} />

                {/* Rutas privadas admin */}
                <Route
                    path="/admin"
                    element={
                        <PrivateAdminRoute>
                            <Dashboard />
                        </PrivateAdminRoute>
                    }
                />

                <Route
                    path="/admin/users"
                    element={
                        <PrivateAdminRoute>
                            <Users />
                        </PrivateAdminRoute>
                    }
                />

                <Route
                    path="/admin/transactions"
                    element={
                        <PrivateAdminRoute>
                            <Transactions />
                        </PrivateAdminRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
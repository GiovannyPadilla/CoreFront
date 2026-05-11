import { Link, useLocation } from 'react-router-dom';

import './Sidebar.css';

const Sidebar = () => {

    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (

        <aside className="sidebar">

            <section className="sidebar-header">

                <h2>FinanceTrack</h2>

            </section>

            <nav className="sidebar-nav">

                <ul>

                    <li>

                        <Link
                            to="/admin"
                            className={
                                isActive('/admin')
                                    ? 'active-link'
                                    : ''
                            }
                        >
                            Dashboard
                        </Link>

                    </li>

                    <li>

                        <Link
                            to="/admin/users"
                            className={
                                isActive('/admin/users')
                                    ? 'active-link'
                                    : ''
                            }
                        >
                            Usuarios
                        </Link>

                    </li>

                    <li>

                        <Link
                            to="/admin/transactions"
                            className={
                                isActive('/admin/transactions')
                                    ? 'active-link'
                                    : ''
                            }
                        >
                            Transacciones
                        </Link>

                    </li>

                </ul>

            </nav>

            <section className="sidebar-footer">

                <button
                    className="logout-button"
                    onClick={() => {

                        localStorage.removeItem('token');
                        localStorage.removeItem('rol');
                        localStorage.removeItem('usuario');

                        window.location.href = '/login';
                    }}
                >
                    Cerrar sesión
                </button>

            </section>

        </aside>
    );
};

export default Sidebar;
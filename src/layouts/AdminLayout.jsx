import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';

import './AdminLayout.css';

const AdminLayout = ({ children }) => {
    return (
        <main className="admin-layout">
            <Sidebar />

            <section className="admin-content">
                <Navbar />
                {children}
            </section>
        </main>
    );
};

export default AdminLayout;
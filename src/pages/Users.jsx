import AdminLayout from '../layouts/AdminLayout';
import UserForm from '../components/UserForm/UserForm';
import UserTable from '../components/UserTable/UserTable';

const Users = () => {
    return (
        <AdminLayout>
            <UserForm />
            <UserTable />
        </AdminLayout>
    );
};

export default Users;
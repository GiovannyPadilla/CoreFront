import './UserTable.css';

const UserTable = () => {
    const users = [
        {
            id: 1,
            name: 'Juan',
            email: 'juan@gmail.com',
            role: 'ADMIN',
        },
    ];

    return (
        <section className="table-container">
            <table>
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Rol</th>
                </tr>
                </thead>

                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
    );
};

export default UserTable;
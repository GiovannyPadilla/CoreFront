import AdminLayout from '../layouts/AdminLayout';
import TransactionForm from '../components/TransactionForm/TransactionForm';
import TransactionTable from '../components/TransactionTable/TransactionTable';

const Transactions = () => {
    return (
        <AdminLayout>
            <TransactionForm />
            <TransactionTable />
        </AdminLayout>
    );
};

export default Transactions;
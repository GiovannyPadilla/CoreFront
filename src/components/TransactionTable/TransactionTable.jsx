const TransactionTable = () => {
    const transactions = [
        {
            id: 1,
            amount: 120,
            category: 'Comida',
        },
    ];

    return (
        <section className="table-container">
            <table>
                <thead>
                <tr>
                    <th>Monto</th>
                    <th>Categoría</th>
                </tr>
                </thead>

                <tbody>
                {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                        <td>${transaction.amount}</td>
                        <td>{transaction.category}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
    );
};

export default TransactionTable;
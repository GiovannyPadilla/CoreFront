import './DashboardCards.css';

const DashboardCards = () => {
    return (
        <section className="cards-grid">
            <section className="card">
                <h3>Balance</h3>
                <h2>$15,000</h2>
            </section>

            <section className="card">
                <h3>Usuarios</h3>
                <h2>120</h2>
            </section>

            <section className="card">
                <h3>Transacciones</h3>
                <h2>560</h2>
            </section>
        </section>
    );
};

export default DashboardCards;
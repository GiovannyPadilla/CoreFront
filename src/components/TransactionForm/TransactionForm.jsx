import { useEffect, useState } from 'react';
import api from '../../services/api';
import './TransactionForm.css';

const TransactionForm = () => {
    const [descripcion, setDescripcion] = useState('');
    const [monto, setMonto] = useState('');
    const [fechaTransaccion, setFechaTransaccion] = useState('');
    const [tipo, setTipo] = useState('EGRESO');
    const [notas, setNotas] = useState('');
    const [categorias, setCategorias] = useState([]);
    const [categoriaId, setCategoriaId] = useState('');
    const [cuentaId, setCuentaId] = useState('');

    useEffect(() => {
        loadCategorias();
    }, []);

    const loadCategorias = async () => {
        const response = await api.get('/categorias');
        setCategorias(response.data);
    };

    const saveTransaction = async (e) => {
        e.preventDefault();

        try {
            await api.post('/transacciones', {
                descripcion,
                monto,
                fechaTransaccion,
                tipo,
                notas,
                categoriaId,
                cuentaId,
            });

            alert('Transacción guardada');
        } catch (error) {
            alert(error.response?.data?.message || 'Error al guardar');
        }
    };

    return (
        <section className="form-box">
            <h2>Nueva Transacción</h2>

            <form onSubmit={saveTransaction}>
                <input
                    type="text"
                    placeholder="Descripción"
                    onChange={(e) => setDescripcion(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Monto"
                    onChange={(e) => setMonto(e.target.value)}
                />

                <input
                    type="date"
                    onChange={(e) => setFechaTransaccion(e.target.value)}
                />

                <select onChange={(e) => setTipo(e.target.value)}>
                    <option value="EGRESO">EGRESO</option>
                    <option value="INGRESO">INGRESO</option>
                    <option value="TRANSFERENCIA">TRANSFERENCIA</option>
                </select>

                <select onChange={(e) => setCategoriaId(e.target.value)}>
                    <option value="">Seleccione categoría</option>

                    {categorias.map((categoria) => (
                        <option key={categoria.id} value={categoria.id}>
                            {categoria.nombre}
                        </option>
                    ))}
                </select>

                <input
                    type="number"
                    placeholder="ID de cuenta temporal"
                    onChange={(e) => setCuentaId(e.target.value)}
                />

                <textarea
                    placeholder="Notas"
                    onChange={(e) => setNotas(e.target.value)}
                />

                <button type="submit">Guardar</button>
            </form>
        </section>
    );
};

export default TransactionForm;
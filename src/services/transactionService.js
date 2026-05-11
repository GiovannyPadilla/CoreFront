import api from './api';

export const getTransactions = async () => {
    return await api.get('/transacciones');
};

export const createTransaction = async (transaction) => {
    return await api.post('/transacciones', transaction);
};
import api from './api';

export const getUsers = async () => {
    return await api.get('/users');
};

export const createUser = async (user) => {
    return await api.post('/users', user);
};

export const deleteUser = async (id) => {
    return await api.delete(`/users/${id}`);
};
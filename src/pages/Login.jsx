import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import api from '../services/api';

import './Login.css';

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] =
        useState('');

    const [password, setPassword] =
        useState('');

    const getErrorMessage = (error) => {

        const data = error.response?.data;

        if (!data) {
            return 'No se pudo conectar con el servidor';
        }

        if (typeof data === 'string') {
            return data;
        }

        if (data.message) {
            return data.message;
        }

        return 'Credenciales inválidas';
    };

    const login = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post(
                '/auth/login',
                {
                    email,
                    password,
                }
            );

            // guardar JWT
            localStorage.setItem(
                'token',
                response.data.token
            );

            // guardar rol
            localStorage.setItem(
                'rol',
                response.data.rol
            );

            // guardar usuario
            localStorage.setItem(
                'usuario',
                JSON.stringify(response.data)
            );

            // validar admin
            if (response.data.rol === 'ADMIN') {

                navigate('/admin');

                return;
            }

            alert(
                'No tienes permisos de administrador'
            );

        } catch (error) {

            console.log(error);

            alert(
                getErrorMessage(error)
            );
        }
    };

    return (

        <main className="login-page">

            <section className="login-card">

                <h1>FinanceTrack</h1>

                <p>
                    Acceso administrador
                </p>

                <form onSubmit={login}>

                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) =>
                            setEmail(
                                e.target.value
                            )
                        }
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) =>
                            setPassword(
                                e.target.value
                            )
                        }
                    />

                    <button type="submit">
                        Ingresar
                    </button>

                </form>

            </section>

        </main>
    );
};

export default Login;
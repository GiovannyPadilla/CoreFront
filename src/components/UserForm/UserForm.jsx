import { useState } from 'react';
import api from '../../services/api';

import './UserForm.css';

const UserForm = () => {

    const [nombreCompleto, setNombreCompleto] =
        useState('');

    const [email, setEmail] =
        useState('');

    const [password, setPassword] =
        useState('');

    const [rol, setRol] =
        useState('USER');

    const getErrorMessage = (error) => {

        const data = error.response?.data;

        if (!data) {
            return 'No se pudo conectar con el servidor';
        }

        if (typeof data === 'string') {
            return data;
        }

        if (data.fieldErrors) {

            return Object.values(
                data.fieldErrors
            ).join('\n');
        }

        if (data.message) {
            return data.message;
        }

        return 'Error al registrar usuario';
    };

    const saveUser = async (e) => {

        e.preventDefault();

        try {

            await api.post('/auth/register', {

                nombreCompleto,
                email,
                password,
                rol,

            });

            alert(
                'Usuario registrado correctamente'
            );

            // limpiar formulario
            setNombreCompleto('');
            setEmail('');
            setPassword('');
            setRol('USER');

        } catch (error) {

            console.log(error);

            alert(
                getErrorMessage(error)
            );
        }
    };

    return (

        <section className="form-box">

            <h2>Nuevo Usuario</h2>

            <form onSubmit={saveUser}>

                <input
                    type="text"
                    placeholder="Nombre completo"
                    value={nombreCompleto}
                    onChange={(e) =>
                        setNombreCompleto(
                            e.target.value
                        )
                    }
                />

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

                <select
                    value={rol}
                    onChange={(e) =>
                        setRol(
                            e.target.value
                        )
                    }
                >

                    <option value="USER">
                        USER
                    </option>

                    <option value="ADMIN">
                        ADMIN
                    </option>

                </select>

                <button type="submit">
                    Registrar
                </button>

            </form>

        </section>
    );
};

export default UserForm;
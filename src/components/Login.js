import React, { useState } from 'react';
import './loginstyle.css';
import logo from '../assets/logo.svg';

const Login = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/api/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });

            const data = await response.json();

            if (response.ok && data.is_user_valid) {
                onLoginSuccess(); // Llamar a la función de inicio de sesión exitoso
            } else {
                setErrorMessage('Usuario o contraseña incorrectos');
            }
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
        }
    };

    return (
        <div className="screen-1">
            <svg
                className="logo"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width="300"
                height="300"
                viewBox="0 0 640 480"
                xmlSpace="preserve"
            >
                <image xlinkHref={logo} width="100%" height="100%" />
            </svg>

            <div className="email">
                <label htmlFor="email">Correo Electrónico</label>
                <div className="sec-2">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input
                        type="email"
                        name="email"
                        placeholder="Username@gmail.com"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
            </div>

            <div className="password">
                <label htmlFor="password">Contraseña</label>
                <div className="sec-2">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input
                        className="pas"
                        type="password"
                        name="password"
                        placeholder="************"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <ion-icon className="show-hide" name="eye-outline"></ion-icon>
                </div>
            </div>

            <button className="login" onClick={handleLogin}>
                Iniciar Sesión
            </button>

            <div className="footer">
                <span>Regístrate</span>
                <span>¿Olvidaste tu contraseña?</span>
            </div>

            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default Login;

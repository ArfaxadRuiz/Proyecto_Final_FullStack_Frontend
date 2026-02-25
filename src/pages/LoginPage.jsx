import React, { useState } from 'react';
import axios from 'axios';
import styles from './LoginPage.module.scss';

function LoginPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'http://localhost:8000/api/token/',
                {
                    username: username,
                    password: password
                }
            );

            console.log(response.data);
            alert("Login correcto");

        } catch (error) {
            alert("Credenciales incorrectas");
        }
    };

    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Login</h1>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <input 
                        className={styles.input}
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <input 
                        className={styles.input}
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <div className={styles.actions}>
                        <button 
                            className={styles.button}
                            type="submit"
                        >
                            Ingresar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;


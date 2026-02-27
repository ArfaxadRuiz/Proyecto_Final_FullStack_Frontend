import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import styles from './LoginPage.module.scss';

function LoginPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:8000/api/users/login/",
                {
                    username: username,
                    password: password
                }
            );

            console.log(response.data);

            localStorage.setItem("token", response.data.access);
            console.log("Token guardado:", localStorage.getItem("token"));
            navigate("/dashboard");

        } catch (error) {
            console.log("ERROR COMPLETO:", error);
            console.log("RESPUESTA DEL BACK:", error.response);
            console.log("DATA:", error.response?.data);
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
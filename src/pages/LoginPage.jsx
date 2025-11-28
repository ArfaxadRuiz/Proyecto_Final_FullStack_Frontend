import React from 'react';
import styles from './LoginPage.module.scss';

function LoginPage (){
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Login</h1>

                <form className={styles.form} onSubmit={(e) => { e.preventDefault();}}>
                    <input className={styles.input} type= "email" placeholder="Correo" required/>
                    <input className={styles.input} type="password" placeholder="Contraseña" required/>

                    <div className={styles.actions}>
                        <button className={styles.button} type="submit">Ingresar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
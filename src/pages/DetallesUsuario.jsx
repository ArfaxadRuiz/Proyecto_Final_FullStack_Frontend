import Header from "../components/Header";
import Menu from "../components/Menu";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../redux/userSlice";
import { useState } from "react";

export default function DetallesUsuario() {

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: user.name,
        avatar: user.avatar,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = () => {
        dispatch(updateUser(formData));
        alert("Datos guardados");
    };

    return (
        <div className="user-details">
            
            <Header title="Configuración del Usuario" />

            <Menu />

            <div className="detalles-usuario">
                <h1>Configurar datos del usuario</h1>

                <label>Nombre:</label>
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <label>Avatar (URL):</label>
                <input
                    name="avatar"
                    value={formData.avatar}
                    onChange={handleChange}
                />

                <button onClick={handleSave}>
                    Guardar cambios
                </button>
            </div>

        </div>
    );
}
import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Menu from "../components/Menu";
import '../styles/main.scss';


function AddGame() {
  const [title, setTitle] = useState("");
  const [consoleName, setConsoleName] = useState("PS5");
  const [owned, setOwned] = useState("physical");
  const [status, setStatus] = useState("no-played");
  const [imageFile, setImageFile] = useState(null);

  const handleAddGame = async (e) => {
    e.preventDefault();

    try {
        const token = localStorage.getItem("token");

        const formData = new FormData();
        formData.append("title", title);
        formData.append("console", consoleName);
        formData.append("owned", owned);
        formData.append("status", status);

        if (imageFile) {
            formData.append("image", imageFile);
        }

        await axios.post(
            "http://localhost:8000/api/games/",
            formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            }
        );

        alert("Juego guardado correctamente");

        // Reset
        setTitle("");
        setConsoleName("PS5");
        setOwned("physical");
        setStatus("no-played");
        setImageFile(null);

    } catch (error) {
        console.error("Error completo:", error.response.data);
        alert("Error al guardar el juego");
    }
};

  return (
    <div className="dashboard">
      {/* Header */}
      <Header title="Agregar Juego" />

      {/* Menu */}
      <Menu />

      {/* Formulario */}
      <div className="add-game">
        <h1>Agregar un nuevo juego</h1>

        <form onSubmit={handleAddGame}>
          <label>
            Nombre del Juego:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
          </label>

          <label>
            Consola:
            <select value={consoleName} onChange={(e) => setConsoleName(e.target.value)}>
              <option>PS5</option>
              <option>PS4</option>
              <option>PS3</option>
              <option>PS2</option>
              <option>PS1</option>
              <option>XBOX 360</option>
              <option>Nintendo NES</option>
            </select>
          </label>

          <label>
            Tengo el juego ?
            <select value={owned} onChange={(e) => setOwned(e.target.value)}>
              <option value="yes">Si, lo tengo</option>
              <option value="no">No, agregalo a deseados</option>
            </select>
          </label>

          <label>
            Estatus:
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="no-played">No lo he jugado</option>
              <option value="playing">Jugandolo</option>
              <option value="finished">Terminado</option>
            </select>
          </label>

          <label>
            Imagen de Caratula:
            <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])}/>
          </label>

          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
}

export default AddGame;

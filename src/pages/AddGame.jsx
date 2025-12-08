import { useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import userImage from "../utils/imageJugador.jpg";

function AddGame() {
  const [title, setTitle] = useState("");
  const [consoleName, setConsoleName] = useState("PS5");
  const [owned, setOwned] = useState("yes");
  const [status, setStatus] = useState("no-played");
  const [imageFile, setImageFile] = useState(null);

  const handleAddGame = (e) => {
      e.preventDefault();

      const newGame = {
          title,
          console: consoleName,
          owned,
          status,
          image: imageFile,
      };
      console.log("Juego agregado: ", newGame);

      setTitle("");
      setConsoleName("PS5");
      setOwned("yes");
      setStatus("no-played");
      setImageFile(null);
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <Header 
        title={"Mis Videojuegos"}
        userName={"Nombre del Usuario"}
        userImg={userImage}
      />

      {/* Menu */}
      <Menu />

      <div>
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

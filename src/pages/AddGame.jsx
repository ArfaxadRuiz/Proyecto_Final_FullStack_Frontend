import { useState } from "react";

function AddGame (){
    //Estado del formulario
    const [title, setTitle] = useState("");
    const [consoleName, setConsoleName] = useState("PS5");
    const [owned, setOwned] = useState("yes");
    const [status, setStatus] = useState("no-played");
    const [imageFile, setImageFile] = useState(null);

    //Manejar el submit
    const handleAddGame = (e) =>{
        e.preventDefault();

        const newGame = {
            title,
            console: consoleName,
            owned,
            status,
            image: imageFile,
        }
        //Mostrar en consola
        console.log("Juego agregado: ", newGame);

        //Limpiar formulario
        setTitle("");
        setConsoleName("PS5");
        setOwned("yes");
        setStatus("no-played");
        setImageFile(null);
    };

    return(
        <div>
            <h1>Agregar un nuevo juego</h1>

            {/* Formulario */}
            <form onSubmit={handleAddGame}>

                {/* Nombre del juego */}
                <label>
                    Nombre del Juego:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                </label>

                {/* Consola */}
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

                {/* Lo tengo o no */}
                <label>
                    Tengo el juego ?
                    <select value={owned} onChange={(e) => setOwned(e.target.value)}>
                        <option value="yes">Si, lo tengo</option>
                        <option value="no">No, agregalo a deseados</option>
                    </select>
                </label>

                {/* Estatus */}
                <label>
                    Estatus:
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="no-played">No lo he jugado</option>
                        <option value="playing">Jugandolo</option>
                        <option value="finished">Terminado</option>
                    </select>
                </label>

                {/* Imagen */}
                <label>
                    Imagen de Caratula:
                    <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])}/>
                </label>

                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}

export default AddGame;
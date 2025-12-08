function Card({title, img, consoleName, owned, status}){

    function getOwnedLabel(value) {
        switch (value) {
            case "physical":
                return "Físico";
            case "digital":
                return "Digital";
            case "both":
                return "Físico y Digital";
            case "wishlist":
                return "Deseado";
            default:
                return "Desconocido";
        }
    }

    return(
        <div className="card">
            {/*Titulo*/}
            <p className="card__title">{title}</p>

            {/*Imagen del juego*/}
            <div className="card__img-box">
                <img src={img} alt={title} className="card__img"/>
            </div>

            {/*Consola*/}
            <p className="card__console">{consoleName}</p>

            {/* Formato (Físico/Digital/Ambos/Deseado) */}
            <p className="card__owned">
                {getOwnedLabel(owned)}
            </p>

            {/*Estatus*/}
            <div className="card__status">
                <span className={`dot ${status}`}></span>
            </div>

        </div>
    );
}

export default Card;
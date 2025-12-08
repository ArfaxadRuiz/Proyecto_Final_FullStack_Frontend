import Header from "../components/Header";
import Menu from "../components/Menu";
import image1 from '../utils/image1.jpg';
import image2 from '../utils/image2.jpg';
import image3 from '../utils/image3.jpg';
import userImage from "../utils/imageJugador.jpg";


export default function Dashboard (){
    return(
        <div className="dashboard">
            
            {/* 1. HEADER */}
            <Header 
                title={"Mis Videojuegos"}
                userName={"Nombre del Usuario"}
                userImg={userImage}
            />

            {/* 2. MENÚ */}
            <Menu />

            {/* 3. TARJETAS */}
            <section className="dashboard__cards">
                
                <div className="card">
                    <p className="card__title">Nombre del juego</p>

                    <div className="card__img-box">
                        <img src={image1} alt="Juego" className="card__img" />
                    </div>

                    <p className="card__console">PS5</p>
                    <p className="card__owned">Físico</p>
                    <div className="card__status">
                        <span className="dot ok"></span>
                    </div>

                </div>

                <div className="card">
                    <p className="card__title">Nombre del juego</p>

                    <div className="card__img-box">
                        <img src={image2} alt="Juego" className="card__img" />
                    </div>

                    <p className="card__console">PS5</p>
                    <p className="card__owned">Físico</p>
                    <div className="card__status">
                        <span className="dot playing"></span>
                    </div>

                </div>

                <div className="card">
                    <p className="card__title">Nombre del juego</p>

                    <div className="card__img-box">
                        <img src={image3} alt="Juego" className="card__img" />
                    </div>

                    <p className="card__console">PS5</p>
                    <p className="card__owned">Físico</p>
                    <div className="card__status">
                        <span className="dot pending"></span>
                    </div>

                </div>

            </section>
        </div>
    );
}
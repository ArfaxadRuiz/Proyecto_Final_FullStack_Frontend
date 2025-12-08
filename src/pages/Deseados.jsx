import Header from "../components/Header";
import Menu from "../components/Menu";
import Card from "../components/Card";
import image1 from '../utils/image1.jpg';
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
                

                <Card
                    title="Nombre del juego"
                    consoleName="PS5"
                    owned="both"
                    status="ok"
                    img={image1}
                />

            </section>
        </div>
    );
}
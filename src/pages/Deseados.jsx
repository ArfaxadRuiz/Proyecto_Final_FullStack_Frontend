import { useSelector } from "react-redux";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Card from "../components/Card";


export default function Dashboard (){

    const wishGames = useSelector(state => state.games.wishlist);

    return(
        <div className="dashboard">
            
            {/* 1. HEADER */}
            <Header title="Juegos Deseados" />

            {/* 2. MENÚ */}
            <Menu />

            {/* 3. TARJETAS */}
            <section className="dashboard__cards">
                {wishGames.length === 0 ? (
                <p>No tienes juegos en tu lista de deseados.</p>
                ) : (
                    wishGames.map(game => (
                        <Card
                            key={game.id}
                            title={game.title}
                            consoleName={game.console}
                            owned="notowned"
                            status={game.status}
                            img={game.img}
                        />
                    ))
                )}
            </section>

        </div>
    );
}
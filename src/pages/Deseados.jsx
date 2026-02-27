import { useSelector } from "react-redux";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Card from "../components/Card";

export default function Deseados() {

    const { games } = useSelector(state => state.games);

    // Filtramos los juegos wishlist
    const wishGames = games.filter(game => game.owned === "wishlist");

    return (
        <div className="dashboard">
            
            <Header title="Juegos Deseados" />
            <Menu />

            <section className="dashboard__cards">

                {wishGames.length === 0 ? (
                    <p>No tienes juegos en tu lista de deseados.</p>
                ) : (
                    wishGames.map(game => (
                        <Card
                            key={game.id}
                            title={game.title}
                            consoleName={game.console}
                            owned={game.owned}
                            status={game.status}
                            img={game.image}
                        />
                    ))
                )}

            </section>
        </div>
    );
}

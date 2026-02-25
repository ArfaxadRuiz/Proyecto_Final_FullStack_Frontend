import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../redux/gamesSlice";

import Header from "../components/Header";
import Menu from "../components/Menu";
import Card from "../components/Card";


export default function Dashboard() {

    const dispatch = useDispatch();
    const { games, status } = useSelector(state => state.games);

    useEffect(() => {
        dispatch(fetchGames());
    }, [dispatch]);

    if (status === "loading") {
        return <p>Cargando juegos...</p>;
    }

    if (status === "failed") {
        return <p>Error al cargar los juegos</p>;
    }

    return (
        <div className="dashboard">

            <Header title="Mis Videojuegos" />
            <Menu />

            <section className="dashboard__cards">
                {games.map(game => (
                    <Card
                        key={game.id}
                        title={game.title}
                        consoleName={game.console}
                        owned={game.owned}
                        status={game.status}
                        img={game.image}
                    />
                ))}
            </section>

        </div>
    );
}
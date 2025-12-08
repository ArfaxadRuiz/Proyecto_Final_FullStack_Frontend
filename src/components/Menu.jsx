function Menu() {
    return (
        <nav className="dashboard__menu">
            <ul className="dashboard__menu-list">

                <li className="dashboard__menu-item">
                    <a href="/dashboard" className="dashboard__menu-link">Dashboard</a>
                </li>

                <li className="dashboard__menu-item">
                    <a href="/add-game" className="dashboard__menu-link">Agregar Juego</a>
                </li>

                <li className="dashboard__menu-item">
                    <a href="#" className="dashboard__menu-link">Mi Biblioteca</a>
                </li>

                <li className="dashboard__menu-item">
                    <a href="#" className="dashboard__menu-link">Juegos Deseados</a>
                </li>

            </ul>
        </nav>
    );
}

export default Menu;

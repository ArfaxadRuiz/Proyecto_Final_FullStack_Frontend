export default function Dashboard (){
    return(
        <div className="dashboard">
            
            {/* 1. HEADER */}
            <header className="dashboard__header">

                <h1 className="dashboard__title">Titulo de mi app</h1>

                <div className="dashboard__user">

                    <img src="" alt="Foto de usuario" className="dashboard__user-img"/>
                    <div>
                        <p className="dashboard__user-name">Nombre del usuario</p>
                        <a href="" className="dashboard__user-config">Configurar Perfil</a>
                    </div>

                </div>
            </header>

            {/* 2. MENÚ */}
            <nav className="dashboard__menu">
                <button className="menu-item">
                    Mis Juegos
                    <span className="menu-badge">3</span>
                </button>

                <button className="menu-item">
                    Lista de deseados
                    <span className="menu-badge">3</span>
                </button>

                <button className="menu-item">
                    Agregar Juego
                </button>
            </nav>

            {/* 3. TARJETAS */}
            <section className="dashboard__cards">
                
                <div className="card">
                    <p className="card__title">Nombre del juego</p>
                    <div className="card__img-box"></div>
                    <p className="card__console">PS5</p>
                    <p className="card__owned">Físico</p>
                    <div className="card__status">
                        <span className="dot ok"></span>
                    </div>

                </div>
            </section>
        </div>
    );
}
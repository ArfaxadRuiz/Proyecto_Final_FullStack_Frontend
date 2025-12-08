function Header({title, userName, userImg}){
    return (
        <header className="dashboard__header">
            <h1 className="dashboard__title">{title}</h1>

            <div className="dashboard__user">
                <img src={userImg} alt="Usuario" className="dashboard__user-img"/>

                <div>
                    <p className="dashboard__user-name">{userName}</p>
                    <a href="" className="dashboard__user-config">Configurar Perfil</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
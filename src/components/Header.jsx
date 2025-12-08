import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header({title, userName, userImg}){
    // Obtenemos el usuario desde Redux
    const user = useSelector((state) => state.user);

     return (
        <header className="dashboard__header">
            <h1 className="dashboard__title">{title}</h1>

            <div className="dashboard__user">
                <img 
                    src={user.avatar} 
                    alt="Usuario" 
                    className="dashboard__user-img"
                />

                <div>
                    <p className="dashboard__user-name">{user.name}</p>

                    <Link to="/detalles-usuario" className="dashboard__user-config">
                        Configurar Perfil
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
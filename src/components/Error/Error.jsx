import { Link } from "react-router-dom";
import "./error.css";

export const Error = () => {
    return ( 
        <div className="not-found">
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <Link to="/">Voltar para a Home</Link>
        </div>
     );
}
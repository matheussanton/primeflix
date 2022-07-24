import { Link } from "react-router-dom";

import "./error.css";

const Error = () => {
    return (
        <div className="notFound">
            <h1>404</h1>
            <h2>Oops.. Page not found</h2>

            <Link to={"/"}>Go back to home</Link>
        </div>
    );
}

export default Error;

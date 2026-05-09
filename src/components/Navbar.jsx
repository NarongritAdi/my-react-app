import { Link } from "react-router-dom";

function NavBar(){
    return (
        <nav style={{display: "flex", gap: "20px", padding: "16px"}}>
            <Link to="/">Home</Link>
            <Link to="/weather">Weather</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}

export default NavBar
import '../css/NavBar.css';
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <>
            <div className="header">
                <div>
                    <span>Hello Ms!</span> 
                </div> 
                <Link to="/">Home</Link>
            </div>
            <div className="navbarContainer">
                <Link to="/Comp1">Comp1</Link> |           
                <Link to="/Table">Table</Link>           
            </div>
        </>
    );
}

export default NavBar;

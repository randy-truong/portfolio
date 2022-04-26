import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="nav-grid fixHeight">

            <h1 className="nav-item-1 brand">
                <nav>
                    <NavLink style={{textDecoration:"none", color: "black"}} to="/">
                    r&y
                    </NavLink>
                </nav>
            </h1>
            <div className="nav-item-2">
            <nav>
                    <NavLink 
                    style={({ isActive }) => {
                    return {
                        display: "block",
                        margin: "1rem 0",
                        opacity: isActive ? "1.0" : "0.3",
                        textDecoration: "none",
                        color: "black",
                    };
                    }}
                    to="/About">
                    about
                    </NavLink>
                    <NavLink 
                    style={({ isActive }) => {
                    return {
                        display: "block",
                        margin: "1rem 0",
                        opacity: isActive ? "1.0" : "0.3",
                        textDecoration: "none",
                        color: "black",
                    };
                    }}
                    to="/Projects">
                    projects
                    </NavLink>
                    <NavLink 
                    style={({ isActive }) => {
                    return {
                        display: "block",
                        margin: "1rem 0",
                        opacity: isActive ? "1.0" : "0.3",
                        textDecoration: "none",
                        color: "black",
                    };
                    }}
                    to="/Visual">
                    visual
                    </NavLink>
                </nav>
            </div>
            <div className="nav-item-3">
                <nav>
                
                    <NavLink 
                    style={({ isActive }) => {
                    return {
                        display: "block",
                        margin: "1rem 0",
                        opacity: isActive ? "1.0" : "0.3",
                        textDecoration: "none",
                        color: "#D3B000",
                    };
                    }}
                    to="/Playground">
                    playground
                    </NavLink>
                </nav>
            </div>

            <div className="nav-item-4">
                footer
            </div>

            
        </div>
    );
}

export default Navbar;
import { NavLink, Outlet } from "react-router-dom";
import "./assets/styles/style.css";

function App() {
  return (
    <div className="main">

      <h1>Hello 1!</h1>
      <nav>
        <NavLink 
        style={({ isActive }) => {
          return {
            display: "block",
            margin: "1rem 0",
            opacity: isActive ? "1.0" : "0.5",
            textDecoration: "none"
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
            opacity: isActive ? "1.0" : "0.5",
            textDecoration: "none"
          };
        }}
        to="/Projects">
          projects
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;

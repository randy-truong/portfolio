import { NavLink, Outlet } from "react-router-dom";
//import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import Nav from "react-bootstrap/Nav";
//import NavDropdown from "react-bootstrap/NavDropdown";
import "./assets/styles/style.css";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="main">
      <div className="grid fixHeight">
        <div class="item-1 fixHeight">
          <Navbar />
        </div>
        <div class="item-2 fixHeight">
          <Outlet />
        </div>
      </div>


    <footer className="copyright">
      © 2022 Randy Truong. All rights reserved.
    </footer>

    </div>
  );
}

export default App;

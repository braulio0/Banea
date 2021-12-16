import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap-v5";

const NavBar = () => {
  return (
    <Navbar
      className="fixed-top shadow-lg"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Navbar.Brand className="ml-lg-5">
        <Link href="/">
          <a
            className="nav-link pl-4"
            href="#home"
            //onClick={hola}
            style={{ outline: "0" }}
          >
            <img style={{ height: "3em", width:"5em" }} src={"/logo.png"} />
          </a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-between w-100 mr-5">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 align-items-lg-center">
            <li className="nav-item">
              <Link href="/">
                <a
                  className="nav-link p-3"
                  href="#home"
                  //		onClick={hola}
                  style={{ outline: "0" }}
                >
                     Inicio
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Store">
                <a
                  className="nav-link p-3 "
                  href="#"
                  //onClick={hola}
                  style={{ outline: "0" }}
                >
                  Compra
                </a>
              </Link>
            </li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;

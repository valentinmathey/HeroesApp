import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/redux";
import { setLogout } from "../../../redux/slices/auth";
import styles from "./Header.module.css";

export const Header = () => {
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(setLogout());
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className={styles.navbar}>
            <Container>
                <Navbar.Brand>
                    <Link to="/" className={styles.navLinkBrand}>Inicio</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item>
                            <Link to="/search" className={styles.navLink}>Buscar Héroes</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/dcHeroes" className={styles.navLink}>DC Héroes</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/marvelHeroes" className={styles.navLink}>Marvel Héroes</Link>
                        </Nav.Item>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end gap-3">
                        <Navbar.Text className={styles.navText}>Ingresando como: <b>Admin</b></Navbar.Text>
                        <div
                            className={styles.logoutIconWrapper}
                            onClick={handleLogout}
                            role="button"
                            aria-label="Cerrar sesión"
                        >
                            <span className="material-symbols-outlined">logout</span>
                        </div>
                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};


import  Button  from 'react-bootstrap/Button';
import  Container  from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <Navbar.Text className="fs-3" style={{color: 'gold'}} >
                        Mobee
                    </Navbar.Text>
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/movies" className="nav-link">Movies</NavLink>
                    </Nav>
                    <Button variant="outline-success">Search</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
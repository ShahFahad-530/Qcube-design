import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo_img from '../assets/img/logo.png'
import game from '../assets/img/game.png'
import linkedin from '../assets/img/linkedin.png'
import twitter from '../assets/img/twitter.png'
import { Link } from 'react-router-dom';
import '../assets/style/Navbar.css'

function NavbarTop() {
  return (
    <Navbar bg="light" expand="lg" className='navbar_top_main'>
      <Container>
        <Navbar.Brand href="#home"><img src={logo_img} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link className='links_navbar' to='/features'>Features</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='links_navbar' to='/stacking'>Stacking</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='links_navbar' to='/portfolio'>PortFolio</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='links_navbar' to='/faqs'>FAQs</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='links_navbar' to='/contact'>Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className='navbar_left'>
          <Nav.Link href="#home"><img className='mx-3 nav-icon' src={game} /></Nav.Link>
          <Nav.Link href="#home"><img className='mx-3 nav-icon' src={twitter} /></Nav.Link>
          <Nav.Link href="#home"><img className='mx-3 nav-icon' src={linkedin} /></Nav.Link>
          <button className="btn navbar_btn" style={{ backgroundColor: '#1092B2' }} type="submit">Dashboard</button>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavbarTop;
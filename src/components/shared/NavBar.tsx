import { Navbar, Nav, Container } from 'react-bootstrap';

function NavbarModule(props: any) {
  return (
    <>
      <Navbar expand="lg" className='navbar'>
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src={props.logoImage}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Blaze Logo"
            />
            Blaze
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Todos</Nav.Link>
              <Nav.Link href="#">Sign In</Nav.Link>
              <Nav.Link href="#">Sign Up</Nav.Link>
              <Nav.Link href="#"></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className='profile-container'>
          <img
            src={props.logoImage}
            width="40"
            height="40"
            className="profile-image"
            alt="Blaze Logo"
          />
        </div>
      </Navbar>
    </>
  );
}

export default NavbarModule;
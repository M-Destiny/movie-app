import React, { useRef, useState } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LinkContainer } from 'react-router-bootstrap';
import SearchPage from './SearchPage';

const Header = () => {
  const inputRef = useRef();
  const [databox, setdatabox] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);
  console.log(databox);

  const handleSearchClick = () => {
    setSearchClicked(true);
  };

  return (
    <div className=' header'>
      <Navbar expand="lg" className="navbar" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">Movie</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 text-end"
              style={{ maxHeight: '10rem' }}
              navbarScroll
            >
              <Nav.Link href="/popular">Popular</Nav.Link>

              <Nav.Link href="/toprated">Top Rated</Nav.Link>
              <Nav.Link href="/upcoming">Upcoming </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-3"
                aria-label="Search"
                ref={inputRef}
                onChange={() => setdatabox(inputRef.current.value)}
              />
              <Button variant="outline-danger" onClick={handleSearchClick}>
                <LinkContainer to="/search">
                  <Nav.Link>Search</Nav.Link>
                </LinkContainer>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {searchClicked && <SearchPage searchdata={databox} />}
    </div>
  );
};

export default Header;


import React from "react"
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap"
import {Link} from "react-router-dom"

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/">
          <Nav.Link href="#home">Home</Nav.Link>
        </Link>
        <Link to="/backoffice">
          <Nav.Link href="#features">Backoffice</Nav.Link>
        </Link>
        <Link to="/cart">
          <Nav.Link href="#pricing">Cart</Nav.Link>
        </Link>
      </Nav>

      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  )
}

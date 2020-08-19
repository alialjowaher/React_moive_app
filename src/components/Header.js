import React from 'react'
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap'



const Header = () => {
    return (
        <Navbar fixed="top" variant="dark" className="header">
            <h2 className="logo">RMA</h2>

            <Navbar.Brand href="#home"> React Moives App</Navbar.Brand>

            <Nav className="mr-auto">
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="type here" className="mr-sm-2 searchbox" />
                <Button variant="outline-secondary" className="search">Search</Button>
            </Form>
        </Navbar>
    )


}

export default Header
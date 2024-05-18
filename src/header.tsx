import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link, useNavigate} from "react-router-dom";
import auth from "./auth";

const Header = () => {
    const navigate = useNavigate()

    function handlerCheck(id : string): void {
        navigate(id, {replace: true, state: {from: "auth"}})
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <i className="bi bi-bag-plus" 
                    style={{ fontSize: '2rem',margin: '0.5rem'}}
                    ></i>
                    <Navbar.Brand href="/" >Аптека Леры</Navbar.Brand >
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Button variant="outline-success" className="m-1" onClick={() =>{handlerCheck("/auth")}}>Войти</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <span className="catalog-header transition">
                        <Link to="/stocks" className="transition">Акции</Link>
                        </span>
                    <span className="catalog-header">
                        <Link to="/sale">Распродажа</Link>
                        </span>
                    <span className="catalog-header">
                        <Link to="/service">Улсуги</Link>
                        </span>
                    <span className="catalog-header">
                        <Link to="/shop/inoses">Стельки</Link>
                        </span>
                    <span className="catalog-header">
                        <Link to="/shop/shoes">Ортопедические изделия</Link>
                        </span>
                    <span className="catalog-header">
                        <Link to="/shop/pilow">Подушки</Link>
                        </span>
                    <span className="catalog-header">
                        <Link to="/shop/vitamins">Витамины</Link>
                        </span>
                </Container>
            </Navbar>
        </>
        
    )
}

export default Header


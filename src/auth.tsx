import React from 'react'
import Container from "react-bootstrap/Container";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Header from "./header";
import Footer from "./footer";
import {useNavigate} from "react-router-dom";

const AuthComponent = () => {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate()
    const [isShow, setShow] = useState(true)
    
    function handlerCheck(id: string): void {
        navigate(id)
    }

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            // handlerCheck("opportunities")
            console.log(1)
        }else if(form.checkValidity() === true) {
            console.log(2)
            handlerCheck("opportunities")
        }
        setValidated(true);
    };

    function Reg() {
        return (
            <>
            <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                            />
                            <Form.Control.Feedback type="invalid">
                                Пожалуйста введите свое имя
                            </Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Пожалуйста введите свою фамилию"

                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a Last name.
                            </Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Пожалуйста ввведите username
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                            <Form.Label>Страна</Form.Label>
                            <Form.Control type="text" placeholder="State" required />
                            <Form.Control.Feedback type="invalid">
                                Пожалуйста напишите свою страну.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Город</Form.Label>
                            <Form.Control type="text" placeholder="City" required />
                            <Form.Control.Feedback type="invalid">
                                Напишите свой город.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
            </>
        )
    }

    function Log () {
        return (
            <>
                 <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>User name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="UserName"
                            />
                            <Form.Control.Feedback type="invalid">
                                Пожалуйста введите свое имя
                            </Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Пожалуйста введите свою Почту"

                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a Gmail.
                            </Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        
                    </Row>
            </>
        )
    }

    return (
        <>
            <Header/>
            <Container className="mt-5">
                <Form noValidate validated={validated} onSubmit={handleSubmit} className="FormAuth">
                    {isShow ? <Log/> : <Reg/>}
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Пожалуйста подтвердите "
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <Row>
                        <Form.Group as={Col} md="4">
                            <Button
                            type="submit"
                            >
                                Сохранить данные
                            </Button>
                            <Button
                            className ="mt-3" 
                            type="submit"
                            onClick={() => setShow(s => !s)}
                            >
                                Войти/Регистрироваться 
                            </Button>
                        </Form.Group>
                    </Row>
                    
                </Form>
            </Container>
            <Footer/>
        </>
    )
}

export default AuthComponent
import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Header from "./header";
import Footer from "./footer";
import Container from "react-bootstrap/Container";

const support = () => {

    return (
        <>
            <Header/>
            <Container>
                <h6>Пожалуйста, чтобы вам помогли, укажите свою почту и опишите свою проблему.
                    С вами обязательно свяжутся
                </h6>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary">Отправить письмо</Button>{' '}
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}

export default support
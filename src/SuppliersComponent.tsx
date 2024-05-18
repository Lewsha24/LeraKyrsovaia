import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from "./header";
import Footer from "./footer";
import {Col, Container, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function SuppliersComponent() {
    const navigate = useNavigate()
    return (
        <>
            <Header/>
            <Container className="mt-5">
                <h2>Поставки</h2>
                <h4>Тут находятся ваши поставщики.</h4>
                <h4>И общее описание всех пользователей</h4>
                <Row>
                    <Col>
                        <Card style={{ width: '22rem' }} className="mt-2">
                            <Card.Body>
                                <Card.Title>Рыбная доля</Card.Title>
                                <Card.Text>
                                    Привозит дешевую рыбу. Без какого либо проблем
                                    Все всегда во время.Высшее качество товара. Безупречная работа
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '22rem' }} className="mt-2">
                            <Card.Body>
                                <Card.Title>Сырная</Card.Title>
                                <Card.Text>
                                    Довольно дорогой сыр, так как лучшее качество.
                                    Люди берут часто
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '22rem' }} className="mt-2">
                            <Card.Body>
                                <Card.Title>КрабыРаки</Card.Title>
                                <Card.Text>
                                    Крабы и Раки хорошего качество, но где их берут, не понятно.
                                    Берем не много, редко берут
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '22rem' }} className="mt-2">
                            <Card.Body>
                                <Card.Title>Консервы</Card.Title>
                                <Card.Text>
                                    Качество и норм цена.
                                    Быстро все разгружают, без лишних слов.Нет слов
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '22rem' }} className="mt-2">
                            <Card.Body>
                                <Card.Title>Овощи</Card.Title>
                                <Card.Text>
                                    Редко доставляют полную сумму.
                                    Стоит сменить контору. Каждый раз что либо роняют.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '22rem' }} className="mt-2">
                            <Card.Body>
                                <Card.Title>Фрукты</Card.Title>
                                <Card.Text>
                                    Таджики делают дела. Лучшие поставки.
                                    Берем много
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Button onClick={() => {navigate(-1)}} className="mt-5" >Вернуться назад</Button>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
}

export default SuppliersComponent;
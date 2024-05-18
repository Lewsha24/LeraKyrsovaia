import React from "react";
import {Badge, Button, Col, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Footer from "./footer";
import Header from "./header";

const OpportunitiesComponent = () => {
    const navigate = useNavigate()

    function handlerCheck(id : string): void {
        navigate(id)
    }
    return (
        <>
            <Header/>
            <Container>
                <h2>
                    <Badge bg="secondary" className="mt-4">
                        Возможности
                    </Badge>
                </h2>

                <Row>
                    <Col>
                        <div className="d-grid gap-2 mt-2">
                            <Button variant="primary" size="lg" onClick={() =>{handlerCheck("map")}}>
                                <i className="bi bi-file-ppt-fill"></i>
                                Точки продажи
                            </Button>
                        </div>
                        <div className="d-grid gap-2 mt-2">
                            <Button variant="primary" size="lg" onClick={() =>{handlerCheck("/employee")}}>
                                <i className="bi bi-person-badge-fill"></i>
                                Сотрудники
                            </Button>
                        </div>
                    </Col>
                    <Col>
                        <div className="d-grid gap-2 mt-2">
                            <Button variant="primary" size="lg"
                                    onClick={() =>{handlerCheck("/suppliers")}}
                            >
                                <i className="bi bi-ev-front-fill"></i>
                                Поставщики
                            </Button>
                        </div>
                        <div className="d-grid gap-2 mt-2">
                            <Button variant="primary" size="lg" onClick={() =>{handlerCheck("/coming")}}>

                                <i className="bi bi-arrow-down-left"></i>
                                Приход
                            </Button>
                        </div>
                    </Col>
                    <Col>
                        <div className="d-grid gap-2 mt-2">
                            <Button variant="primary" size="lg" onClick={() => {handlerCheck("/toStore")}}>
                                <i className="bi bi-arrow-down-right"></i>
                                Возрат поставщику
                            </Button>
                        </div>
                        <div className="d-grid gap-2 mt-2">
                            <Button variant="primary" size="lg" onClick={() => {handlerCheck("/supplier")}}>
                                <i className="bi bi-arrow-counterclockwise"></i>
                                Возрат магазину
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}

export default OpportunitiesComponent
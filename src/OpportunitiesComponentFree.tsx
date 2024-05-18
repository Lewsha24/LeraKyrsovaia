import React from "react";
import {Badge, Button, Col, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Footer from "./footer";
import Header from "./header";

const OpportunitiesComponentFree = () => {
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
                        Возможности Бесплатной версии
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
                    </Col>
                    <Col>
                        <div className="d-grid gap-2 mt-2">
                            <Button variant="primary" size="lg">
                                <i className="bi bi-ev-front-fill"></i>
                                Поставщики
                            </Button>
                        </div>
                    </Col>
                    <Col>
                        <div className="d-grid gap-2 mt-2">
                            <Button variant="primary" size="lg">
                                <i className="bi bi-arrow-down-right"></i>
                                Возрат поставщику
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}

export default OpportunitiesComponentFree
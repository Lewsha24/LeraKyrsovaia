import React from "react";
import Header from "./header";
import Footer from "./footer";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

const ContanctComponent = () => {
    return (
        <>
            <Header/>
                <Container className="mt-5">
                    <Row>
                        <Col>
                            <h4>Telegram</h4>
                            <h4>WhatsApp</h4>
                            <h4>Viber</h4>
                            <h4>Gmail</h4>
                        </Col>
                        <Col>
                            <p>@German</p>
                            <p>+7-923-826-11-23</p>
                            <p>+7-923-826-11-23</p>
                            <p>germanSupport@gmail.com</p>
                        </Col>
                    </Row>
                </Container>
            <Footer/>
        </>
    )
}
export default ContanctComponent
import React from "react";
import { YMaps, Map } from '@pbe/react-yandex-maps';
import Footer from "./footer";
import Header from "./header";
import {Col, Container, Row} from "react-bootstrap";
const MapsComponent = () => {
    return (
        <>
            <Header/>
            <YMaps>
                <div>
                    <h3 className="d-flex justify-content-center">Тут можете посмотреть точки продажи по Москве</h3>
                    <Container>
                        <Row>
                            <Col>
                                <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} style={{width: "950px", height: "750px", margin: "0 auto"}}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </YMaps>
            <Footer/>
        </>
    );
}

export default React.memo(MapsComponent)
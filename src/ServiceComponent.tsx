import React from 'react';
import Footer from "./footer";
import {Col, Container, Row} from "react-bootstrap";
import Header from "./header";


const ServiceComponent = () => {
    return (
        <>
            <Header/>
                <Container>
                    <h3 className="mt-5">Услуги</h3>
                    <Row>
                        <Col md={6}>
                            <div className="block_service mt-4">
                                <img
                                    style={{
                                        width: '100%',
                                    }}
                                    src="https://orteka.ru/upload/iblock/934/c1l0mqfooquvv079zupdpc2fdmwy9a14.jpg" alt="hero"/>
                                <p>Прием Врача-травматолога-ортопеда</p>
                            </div>
                            <div className="block_service mt-4">
                                <img
                                    style={{
                                        width: '100%',
                                    }}
                                    src="https://orteka.ru/upload/iblock/c16/c1633d1a8d7c577e22120b978b088adc.jpg" alt="hero"/>
                                <p>Изготовление индивидуальных стелек</p>
                            </div>
                            <div className="block_service mt-4">
                                <img
                                    style={{
                                        width: '100%',
                                    }}
                                    src="https://orteka.ru/upload/iblock/bbf/72a90h5v0dwxw9nejcdak87a4ebcfxi0.png" alt="hero"/>
                                <p>Наложение ортеза из термопластика</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="block_service mt-4">
                                <img
                                    style={{
                                        width: '100%',
                                    }}
                                    src="https://orteka.ru/upload/iblock/890/2vfrbohb2opkpf4boqfwjzn516zdbdh3.jpg" alt="hero"/>
                                <p>Выезд врача-травматолога-ортопеда</p>
                            </div>
                            <div className="block_service mt-4">
                                <img
                                    style={{
                                        width: '100%',
                                    }}
                                    src="https://orteka.ru/upload/iblock/fd2/fd2dde87f6426fdc6adb017b2889970c.jpg" alt="hero"/>
                                <p>Подбор медицинских ортопедических изделий</p>
                            </div>
                            <div className="block_service mt-4">
                                <img
                                    style={{
                                        width: '100%',
                                    }}
                                    src="https://orteka.ru/upload/iblock/934/c1l0mqfooquvv079zupdpc2fdmwy9a14.jpg" alt="hero"/>
                                <p>Кинезиотейпирование</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            <Footer/>
        </>
    )
}


export default ServiceComponent
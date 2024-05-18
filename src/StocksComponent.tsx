import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Header from "./header";
import Footer from "./footer";


const StocksComponent = () => {
    return (
        <>
            <Header/>
            <Container>
                <h2 className="mt-5">Акции</h2>
                <Row>
                    <Col>
                        <Link to="/stocks">
                            <div className="block_enterpriser mt-5 "
                                 style={{
                                     backgroundImage: "url(https://cdn.orteka.ru/upload/webp/upload/resize_cache/iblock/755/278_185_1/cvzlaf7grry8icreh9i17bs9apbb6c28.webp)",
                                     height: "189px",
                                     width: "90%",
                                     margin: "0 auto"
                                 }}
                            />
                        </Link>
                        <p className="stocks">КиберДни -20%</p>
                        <Link to="/stocks">
                            <div className="block_enterpriser mt-5 "
                                 style={{
                                     backgroundImage: "url(https://cdn.orteka.ru/upload/webp/upload/resize_cache/iblock/b3b/278_185_1/lh7hvk2upp6sgxf45ir4tls4e32eo2t1.webp)",
                                     height: "189px",
                                     width: "90%",
                                     margin: "0 auto"
                                 }}
                            />
                        </Link>
                        <p className="stocks">-50% на диагностику стоп при<br/> покупке обуви</p>
                    </Col>
                    <Col>
                        <Link to="/stocks">
                            <div className="block_enterpriser mt-5 "
                                 style={{
                                     backgroundImage: "url(https://cdn.orteka.ru/upload/webp/upload/resize_cache/iblock/c96/278_185_1/uhy4ilijdeehw8438f6cr2qp9m9lt4xc.webp)",
                                     height: "189px",
                                     width: "90%",
                                     margin: "0 auto"
                                 }}
                            />
                        </Link>
                        <p className="stocks">Сделаем любую вашу обувь ортопедической</p>
                        <Link to="/stocks">
                            <div className="block_enterpriser mt-5 "
                                 style={{
                                     backgroundImage: "url(https://cdn.orteka.ru/upload/webp/upload/resize_cache/iblock/f82/278_185_1/cm4mu48b5925brcpjd44kkm5gql921e0.webp)",
                                     height: "189px",
                                     width: "90%",
                                     margin: "0 auto"
                                 }}
                            />
                        </Link>
                        <p className="stocks">-15% на компрессионный трикотаж Bauerfeind</p>
                    </Col>
                    <Col>
                        <Link to="/stocks">
                            <div className="block_enterpriser mt-5 "
                                 style={{
                                     backgroundImage: "url(https://cdn.orteka.ru/upload/webp/upload/resize_cache/iblock/d14/278_185_1/etwqzwxr6a95aqtgthf8th22i8xmies8.webp)",
                                     height: "189px",
                                     width: "90%",
                                     margin: "0 auto"
                                 }}
                            />
                        </Link>
                        <p className="stocks">ВИТАМИНизация -50%</p>
                    </Col>
                    <Col>
                        <Link to="/stocks">
                            <div className="block_enterpriser mt-5 "
                                 style={{
                                     backgroundImage: "url(https://cdn.orteka.ru/upload/webp/upload/resize_cache/iblock/8a2/278_185_1/nk2qajwpouk26oj12n2ri1soiskj08wp.webp)",
                                     height: "189px",
                                     width: "90%",
                                     margin: "0 auto"
                                 }}
                            />
                        </Link>
                        <p className="stocks">-25% на вторую пару</p>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}


export default StocksComponent
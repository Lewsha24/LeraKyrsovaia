import React from "react";
import Header from "./header";
import Footer from "./footer";
import {Col, Container, Row} from "react-bootstrap";
import Table from "react-bootstrap/Table";

const RefundToSupplier = () => {

    return (
        <>
            <Header/>
            <Container>
                <Row>
                    <Col>
                        <h3 className="table_name_creator_site">
                           Возврат магазину
                        </h3>
                        <Table striped className="Table_">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Название компании которая делает возврат </th>
                                <th>Какой продукт хотят вернуть</th>
                                <th>Вес</th>
                                <th>Цена</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Рыба Деньги</td>
                                <td>Скумбрия</td>
                                <td>12000г</td>
                                <td>20000.0 Руб.</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Сыр Слава</td>
                                <td>Берестова</td>
                                <td>100кг</td>
                                <td>300000.0 Руб.</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Рыба Деньги</td>
                                <td>Мойва</td>
                                <td>1.3000г</td>
                                <td>5000.0 Руб.</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Сыр Слава</td>
                                <td>Сыр с плесенью</td>
                                <td>300г</td>
                                <td>3000.0 Руб.</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Консервы</td>
                                <td>Горох</td>
                                <td>100г</td>
                                <td>90.0 Руб.</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Консервы</td>
                                <td>Ананасы</td>
                                <td>200г</td>
                                <td>160.0 Руб.</td>
                            </tr>
                            </tbody>
                        </Table>

                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}

export default RefundToSupplier
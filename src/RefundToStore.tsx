import React from "react";
import Header from "./header";
import Footer from "./footer";
import {Col, Container, Row} from "react-bootstrap";
import Table from "react-bootstrap/Table";

const RefundToStore = () => {

    return (
        <>
            <Header/>
            <Container>
                <Row>
                    <Col>
                        <h3 className="table_name_creator_site">
                            Возврат Товара клиенту
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
                                <td>1200г</td>
                                <td>2000.0 Руб.</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Сыр Слава</td>
                                <td>Берестова</td>
                                <td>1кг</td>
                                <td>3000.0 Руб.</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Рыба Деньги</td>
                                <td>Мойва</td>
                                <td>1.300г</td>
                                <td>500.0 Руб.</td>
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
                                <td>2000г</td>
                                <td>1600.0 Руб.</td>
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

export default RefundToStore
import React from "react";
import {Col, Row, Container} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Header from "./header";
import Footer from "./footer";

const AboutComponent = () => {
    return (
        <>
            <Header/>
            <Container>
                <Row>
                    <Col>
                        <h3 className="table_name_creator_site">
                            The creator of the site
                        </h3>
                        <Table striped className="Table_">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Имя</th>
                                <th>Фамилия</th>
                                <th>Role</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Герман</td>
                                <td>Рыбин</td>
                                <td>Ген директор</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Алина</td>
                                <td>Берестова</td>
                                <td>Senior программист</td>
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
export default AboutComponent
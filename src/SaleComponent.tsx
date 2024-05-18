import React from "react"
import {Col, Container, Row} from "react-bootstrap";
import Header from "./header";
import Footer from "./footer";


const SaleComponent = () => {
    return (
        <>
            <Header/>
            <Container>
                <h2 className="mt-5">РАСПРАДАЖА</h2>
                <Row>
                    <Col>
                        <div className="block_sale mt-5"
                             style={{
                                 backgroundImage: "url(https://cdn.orteka.ru/upload/webp/upload/iblock/983/v0i405mwjpj0k383dz0tjlojy5kbyt65.webp)",
                             }}
                        >
                        </div>
                            <span className="sale_text">
                                <h4>Ортопедическая и комфортная обувь</h4>
                                <p>Новинки</p>
                                <p>Женская</p>
                                <p>Мужская</p>
                            </span>
                        <div className="block_sale mt-5"
                             style={{
                                 backgroundImage: "url(https://cdn.orteka.ru/upload/webp/upload/iblock/2cf/2cf0cdf0711484a969977dfb285a337f.webp)",
                             }}
                        >
                        </div>
                        <span className="sale_text">
                            <h4>Средства для красоты</h4>
                            <p>Уход за полостью рта</p>
                            <p>Лечебная косметика</p>
                        </span>
                    </Col>
                    <Col>
                        <div className="block_sale mt-5"
                             style={{
                                 backgroundImage: "url(https://cdn.orteka.ru/upload/webp/upload/iblock/b49/b49c2152317650301d393f24171b27e2.webp)",
                             }}
                        >
                        </div>
                        <span className="sale_text">
                            <h4>Компрессионный трикотаж</h4>
                            <p>Чулки</p>
                            <p>Гольфы</p>
                            <p>Колготки</p>
                        </span>
                        <div className="block_sale mt-5"
                             style={{
                                 backgroundImage: "url(https://cdn.orteka.ru/upload/webp/upload/iblock/82d/82df2cc7ebcd08c7af5b09bda4d85ecf.webp)",
                             }}
                        >
                        </div>
                        <span className="sale_text">
                            <h4>Домашняя физиотерапия</h4>
                            <p>Медтехника для дома</p>
                        </span>
                    </Col>
                    <Col>
                        <div className="block_sale mt-5"
                             style={{
                                 backgroundImage: "url(https://cdn.orteka.ru/upload/webp/upload/iblock/578/578a4fb94199d20bcdf180156f14cb71.webp)",
                             }}
                        >
                        </div>
                        <span className="sale_text">
                            <h4>Серийные ортопедические стельки и корригирующие изделия для стопы</h4>
                            <p>Серийные ортопедические стельки</p>
                        </span>
                        <div className="block_sale mt-5"
                             style={{
                                 backgroundImage: "url(https://cdn.orteka.ru/upload/webp/upload/iblock/36b/36bf900efa325638c2d7c48892a3eb09.webp)",
                             }}
                        >
                        </div>
                        <span className="sale_text">
                            <h4>Изделия для спорта</h4>
                            <p>Манжеры и гетры</p>
                            <p>Носки и гольфы</p>
                            <p>Рукава</p>
                            <p style={{color: "#009AA6"}}>Все подкатегории</p>
                        </span>
                    </Col>
                    <Col>
                        <div className="block_sale mt-5"
                             style={{
                                 backgroundImage: "url(https://cdn.orteka.ru/upload/webp/upload/iblock/43d/43df651bd996946cdcb351b145ce877c.webp)",
                             }}
                        >
                        </div>
                        <span className="sale_text">
                            <h4>Ортопедические подушки и матрасы</h4>
                            <p>матрасы</p>
                            <p>Подушки</p>
                            <p>Наполнения</p>
                        </span>
                        <div className="block_sale mt-5"
                             style={{
                                 backgroundImage: "url(https://cdn.orteka.ru/upload/webp/upload/iblock/b00/b00ba0ae05bb85ea04f665f4325b4182.webp)",
                             }}
                        >
                        </div>
                        <span className="sale_text">
                            <h4>Термобелье</h4>
                            <p>Комплекты</p>
                            <p>Кальсоны</p>
                            <p>Ортопедические товары при диабете</p>
                        </span>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>

    )
}


export default SaleComponent
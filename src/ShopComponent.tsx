import React, {useEffect, useState} from "react";
import Header from "./header";
import {Card, Col, Container, Row} from "react-bootstrap";
import Footer from "./footer";
import inosesContent from "./InosesContent";
import ShoesContent from "./ShoesContent";
import {Link} from "react-router-dom";
import InosesContent from "./InosesContent";

let Component : any ;

// информация продукта перед покупкой..
const InfoInosesComponent = () => {
    let path: any = window.location.href.split("/").pop();
    let styleBtn = {
        margin: "5%"
    }
    return (
        <Container>
            {inosesContent.map(item =>
            <Row className="mt-5">
                <Col>
                    <img src={item.img} alt="hello"/>
                </Col>
                <Col>
                    <h1>{item.name}</h1>
                    <span className="price">{item.price}</span>
                    <button
                        className="btn btn-primary"
                        onClick={() => alert("извините, сейчас идут технические работы")}
                        style={styleBtn}
                    >Купить</button>
                </Col>
            </Row>
                )[path]}
        </Container>
    )
}
// Первый компонент, при продаже стельки
const  InosesComponent = () =>  {
    return (
        <Row>
            {inosesContent.map((item, index) =>
                <Col key={index}>
                    <Link to={item.id}>
                        <Card className="mt-4" style={{ width: '18rem' }} id={item.id}>
                            <Card.Img variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title>{item.price}</Card.Title>
                                <Card.Text>
                                    {item.name}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            )}


        </Row>
    )
}

// Информация продукта перед покупкой обуви
const InfoShoesComponent = () => {

    let path: any = window.location.href.split("/").pop();
    let styleBtn = {
        margin: "5%"
    }
    return (
        <Container>
            {ShoesContent.map(item =>
                <Row className="mt-5">
                    <Col>
                        <img src={item.img} alt="hello"/>
                    </Col>
                    <Col>
                        <h1>{item.name}</h1>
                        <span className="price">{item.price}</span>
                        <button
                            className="btn btn-primary"
                            onClick={() => alert("извините, сейчас идут технические работы")}
                            style={styleBtn}
                        >Купить</button>
                    </Col>
                </Row>
            )[path]}
        </Container>
    )
}

// Второй компонент Обувь
const ShoesComponent = () => {
    return (
        <Row>
            {ShoesContent.map((item,index) =>
                <Col key={index}>
                    <Link to={item.id} key={item.id}>
                        <Card className="mt-4" style={{ width: '18rem' }} >
                            <Card.Img variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title>{item.price}</Card.Title>
                                <Card.Text>
                                    {item.name}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            )}
        </Row>
    )
}
const ShopComponent = () => {
    // Вообще нужно использовать switch, case
    // Позже переписать

    // Если ссылка равна, то выведем нужный компонент
    if (window.location.pathname ==  "/shop/inoses") {
        Component = InosesComponent
        // Если ссылка равна, то выведем другой компонент
    }else if (window.location.pathname ==  "/shop/shoes") {
        Component = ShoesComponent
    }else if (window.location.pathname ==  "/shop/pilow") {
        Component = Pilow;
    }else if (window.location.pathname ==  "/shop/vitamins") {
        Component = Vitamins;
    }
    return (
        <>
            <Header/>
            <Container>
                <Component/>
            </Container>
            <Footer/>
        </>
    )
}
// Подушки
const  Pilow = () => {
    return (
        <Row>
            <Col>
                <Card className="mt-4" style={{ width: '18rem' }} >
                    <Card.Img variant="top" src="https://cdn.orteka.ru/upload/webp/upload/resize_cache/iblock/adc/256_256_1/78ylqaklxzswz2e4qs5cp6xnrvxa80il.webp" />
                    <Card.Body>
                        <Card.Title>100$</Card.Title>
                        <Card.Text>
                            Подушка<br/>
                            TRELAX
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mt-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.orteka.ru/upload/webp/upload/resize_cache/iblock/146/256_256_1/2xii158ya774pp83tzox7wocji10uwog.webp"/>
                    <Card.Body>
                        <Card.Title>700$</Card.Title>
                        <Card.Text>
                            ПОДУШКА, МОЛОЧНАЯ<br/>
                            TRELAX Sola П30
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mt-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.orteka.ru/upload/webp/upload/resize_cache/iblock/e5d/256_256_1/tnzxtzkmsa18grfepo3u3s0kio3yrn24.webp" />
                    <Card.Body>
                        <Card.Title>500$</Card.Title>
                        <Card.Text>
                            Подушка<br/>
                            TRELAX Respecta for man
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="mt-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.orteka.ru/upload/webp/upload/resize_cache/iblock/8c7/256_256_1/alwvjn34en9tns455t7m5758xh525zp1.webp"/>
                    <Card.Body>
                        <Card.Title>900$</Card.Title>
                        <Card.Text>
                            Подушка Классика, бела<br/>
                            FMBESONNE
                        </Card.Text>
                    </Card.Body>
                </Card >
                <Card className="mt-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.orteka.ru/upload/webp/upload/resize_cache/iblock/f9f/256_256_1/yboepx5o6qjehaq1voy7dm5l0l03vdh4.webp" />
                    <Card.Body>
                        <Card.Title>50$</Card.Title>
                        <Card.Text>
                           Подушка TRELAX RESPECTA<br/>
                            TEENS P05
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mt-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.orteka.ru/upload/webp/upload/resize_cache/iblock/d96/256_256_1/rb8swddtctg9e52r3e66nhlub54uzddd.webp" />
                    <Card.Body>
                        <Card.Title>750$</Card.Title>
                        <Card.Text>
                            Подушка  TRELAX TEENS P05<br/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }} className="mt-4">
                    <Card.Img variant="top" src="https://cdn.orteka.ru/upload/webp/upload/resize_cache/iblock/247/256_256_1/1cyjuzeyudwe0py9snhyhbu9hf6625hi.webp" />
                    <Card.Body>
                        <Card.Title>100$</Card.Title>
                        <Card.Text>
                           Подушка ортопедическая TRELAX<br/>
                            SUPPORT P18
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="mt-4">
                    <Card.Img variant="top" src="https://cdn.orteka.ru/upload/webp/upload/resize_cache/iblock/579/256_256_1/5797c494c082f0260a0eb83184d7d6c5.webp" />
                    <Card.Body>
                        <Card.Title>200$</Card.Title>
                        <Card.Text>
                            Подушка SOMIA Original<br/>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="mt-4">
                    <Card.Img variant="top" src="https://cdn.orteka.ru/upload/webp/upload/resize_cache/iblock/579/256_256_1/5797c494c082f0260a0eb83184d7d6c5.webp" />
                    <Card.Body>
                        <Card.Title>180$</Card.Title>
                        <Card.Text>
                            Мужские ортопедические Сандали<br/>
                            ORTMANN ware
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}
// Витамины
const Vitamins = () => {
    return (
        <Row>
            <Col>
                <Card className="mt-4" style={{ width: '18rem' }} >
                    <Card.Img variant="top" src="https://cdn.orteka.ru/upload/webp/upload/resize_cache/iblock/f0b/256_256_1/qfy2z1v1j1xs2utdgevvy5qqcfgyzx3z.webp" />
                    <Card.Body>
                        <Card.Title>50$</Card.Title>
                        <Card.Text>
                            Колаген со вкусом вишня
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mt-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.orteka.ru/upload/webp/upload/resize_cache/iblock/da2/256_256_1/t45dzmln9kgjnkvnz3mo0p3aabjlfwtp.webp"/>
                    <Card.Body>
                        <Card.Title>50$</Card.Title>
                        <Card.Text>
                            Коллаген со вкусом лимон-лайм
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mt-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.orteka.ru/upload/webp/upload/resize_cache/iblock/3e6/256_256_1/3wdek51ctm6gbcywf93b81j4e97x2wwy.webp" />
                    <Card.Body>
                        <Card.Title>90$</Card.Title>
                        <Card.Text>
                            БАД Навимесо Коллаген Бьюти
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="mt-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.orteka.ru/upload/webp/upload/resize_cache/iblock/e6f/256_256_1/ddtexl01ngkeqbg7w54bk7f9pzz9cexe.webp"/>
                    <Card.Body>
                        <Card.Title>100$</Card.Title>
                        <Card.Text>
                            Солгар Кожа, ногти, волосы
                        </Card.Text>
                    </Card.Body>
                </Card >
                <Card className="mt-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.orteka.ru/upload/webp/upload/resize_cache/iblock/069/256_256_1/xqxvx2l86fvooe7t1ph2tqlsclao2p7o.webp"/>
                    <Card.Body>
                        <Card.Title>90$</Card.Title>
                        <Card.Text>
                            Солгар Кожа, ногти, волосы
                        </Card.Text>
                    </Card.Body>
                </Card >
                <Card className="mt-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.orteka.ru/upload/webp/upload/resize_cache/iblock/b56/256_256_1/xk6qosc996caq4b18ziliok327j17nch.webp" />
                    <Card.Body>
                        <Card.Title>70$</Card.Title>
                        <Card.Text>
                           Солгар Легкодоступное железо
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }} className="mt-4">
                    <Card.Img variant="top" src="https://cdn.orteka.ru/upload/webp/upload/resize_cache/iblock/35e/256_256_1/2c7ck7v2u25ht5174fy0f8lvna4f0h0d.webp" />
                    <Card.Body>
                        <Card.Title>80$</Card.Title>
                        <Card.Text>
                            Солгар альфа-липоевая кислота
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="mt-4">
                    <Card.Img variant="top" src="https://cdn.orteka.ru/upload/webp/upload/resize_cache/iblock/b3b/256_256_1/fydcv6cis3i6hybmkjnqf98e8t0zwisu.webp" />
                    <Card.Body>
                        <Card.Title>100$</Card.Title>
                        <Card.Text>
                           Витамины VIPROACTIVE
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="mt-4">
                    <Card.Img variant="top" src="https://cdn.orteka.ru/upload/webp/upload/resize_cache/iblock/593/256_256_1/omtq924dym71sdfntrbatuchczk0vbmy.webp"/>
                    <Card.Body>
                        <Card.Title>200$</Card.Title>
                        <Card.Text>
                            Солгар комплекс жирных
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}


export default ShopComponent

import React, {useCallback, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import InosesContent from "./InosesContent";
import ShoesContent from "./ShoesContent";
import Header from "./header";
import Footer from "./footer";

const InfoContentComponent = () => {
    const [obj, setObject] = useState(InosesContent)
    let path: any = window.location.href.split("/").pop();
    let styleBtn = {
        margin: "5%"
    }
    if ("/shop/inoses/:id") {
        useCallback(() =>{setObject(InosesContent)},[InosesContent])
        console.log("InfoInosesContent " + obj)
        // console.log("InfoInosesComponent:"+ window.location.pathname)
    }else if ("/shop/shoes/:id" ) {
        useCallback(() =>{setObject(ShoesContent)},[ShoesContent])
        console.log("InfoShoesContent" +obj)
        // console.log("InfoShoesComponent:"+ window.location.pathname)
    }
    else {
        console.log("Error " + window.location.pathname)
    }
    return (
        <>
            <Header/>
                <Container>
                {obj.map((item,index) =>
                        <Row className="mt-5" key={index}>
                            <Col>
                                <img src={item.img} alt="hello"/>
                            </Col>
                            <Col>
                                <h1>{item.name}</h1>
                                <span className="price">{item.price}</span>
                                <button
                                className="btn btn-primary"
                                onClick={() => alert("извините, сейчас идут технические работы")}
                                style={styleBtn}>Купить</button>
                            </Col>
                        </Row>
                )[path]}
                </Container>
            <Footer/>
    </>
    )
}

export default InfoContentComponent
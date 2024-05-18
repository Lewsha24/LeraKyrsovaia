import React from "react";
import {Badge, Button, Col, Row} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import Container from "react-bootstrap/Container";

const Wrapper = () => {
    const navigate = useNavigate()

    function handlerCheck(id : string): void {
        navigate(id)
    }
    return (
        <Container>
            
            <div className="block_enterpriser mt-5 "
                style={{
                    backgroundImage: "url(https://cdn.orteka.ru/upload/iblock/28b/ojzynxgf0l5b6k4hn6ngzeq47kfz8sfo.webp)",
                    height: "322px",
                    width: "92%",
                }}
            >
            </div>
            
            <div className="minipage">
                <Row>
                    <Col>
                        <div className="advantages_block"
                        style={{
                            backgroundImage: "url(https://cdn.orteka.ru/upload/iblock/345/bcwgt4a63soph617bm64go13udnwwmfa.webp)",
                            height: "322px",
                            width: "92%"
                        }}
                        >
                            
                        </div>
                    </Col>
                    <Col>
                        <div className="advantages_block"
                            style={{
                                backgroundImage: "url(https://cdn.orteka.ru/upload/iblock/322/3jsekl7xx5td4iul13w8630vd5ba7yi3.webp)",
                                height: "322px",
                                width: "92%"
                            }}
                        >
                            <a
                                href=""
                                style={{
                                    textDecoration:"none",
                                    color:' white',
                                    display: 'flex',
                                    top: '200px',
                                    fontSize: '1.5rem',
                                    justifyContent: 'center',
                                    padding: '0px auto',
                                    margin: '0px auto',
                                    position: 'relative',
                                    
                                }}
                            >Как организовать сон беременной</a>
                        </div>
                    </Col>
                    <a href="">
                        <div className="block_enterpriser mt-5"
                            style={{
                                backgroundImage: 'url(	https://cdn.orteka.ru/upload/webp/upload/iblock/67b/9r3nrrph1w5lx4y01a9s0b37k99f9ycr.webp)',
                                height: '322px',
                                width: '92%'
                            }}
                        >

                        </div>
                    </a>
                    <a href="">
                        <div className="block_enterpriser mt-5"
                        style = {{
                            backgroundImage: 'url(https://cdn.orteka.ru/upload/webp/upload/iblock/b0d/yc7xx5javy5dvjshnk1ubq89yrrk5tlw.webp)',
                            height: '322px',
                            width: '92%'
                        }}
                        ></div>
                    </a>
                </Row>
            </div>

        </Container>
    )
}

export default Wrapper
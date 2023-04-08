import React from 'react';
import {Col, Row} from "react-bootstrap";

function Item(props) {
    return (
        <Col>
            <h4>{props.item.title}</h4>
            <img src={process.env.PUBLIC_URL + `/shoes${props.item.id}.jpg`} width={"80%"}/>
            <p>{props.item.price}</p>
            <p>{props.item.content}</p>
        </Col>
    )
}

function Items(props) {
    const data = props.data;

    return (
        <Row>
            {data.map(item => <Item key={item.id} item={item} />)}
        </Row>
    );
}

export default Items;
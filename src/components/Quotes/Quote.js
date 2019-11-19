import React from 'react';
import { Col } from 'react-bootstrap';

export default function Quote( props ) {
    
    console.log(props)
    return (
            <Col className="Quote" xs={5} md={3}>
                <span>{props.quote}</span> 
                <br />
                <span className="Quote-Author"
                >{props.author}</span>
            </Col>
    )
}

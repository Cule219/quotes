import React from 'react';
import { Col } from 'react-bootstrap';

export default function Quote( {quote, author} ) {
    return (
            <Col className="Quote scrollbar scrollbar-juicy-peach" xs={5} md={3}>
                <span>{quote}</span> 
                <br />
                <span className="Quote-Author"
                >{author}</span>
            </Col>
    )
}

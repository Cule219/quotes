import React from 'react';
import Quote from './Quote';
import { Container, Row } from 'react-bootstrap';

export default function QuotesList( props ) {
    return (
        <Container className="QuotesList">
            <Row>
                {props.data.map((quote, index) => {
                    return <Quote key={index} {...quote} />
                })}
            </Row>
        </Container>
    )
}

import React, { Component } from 'react';
import "../css/themePalette.css";
import "../css/WeeklyTracker.css";
import { Container, Row, Col } from 'react-bootstrap';
import { ReactComponent as Bar } from '../img/Calendar_Three-Lines.svg';

function DailyTracker(props) {
    return (

        <Row sm={1} className="theme-Palette-off-white-text theme-Palette-dark-grey-bg">
            <Col xs={1} className="outline"><Bar /></Col>
            <Col xs={1} className="outline">14</Col>
            <Col xs={4} className="outline">
                <Container>
                    <Row>You said you felt 9/10 </Row>
                    <Row> Monday, 9:30 p.m.</Row>
                </Container>
            </Col>
        </Row>


    );
}
export default DailyTracker;
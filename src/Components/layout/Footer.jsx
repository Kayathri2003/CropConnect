import React from 'react'
import {Col,Row,Container} from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
    let today=new Date();

    return (
        <footer className="bg-dark text-light footer">
            <Container>
                <Row>
                    <Col xs={12} md={12} className="text-center">
                        <p className="mb-0"> &copy; {today.getFullYear()} mrc team1 summer interns</p>
                    </Col>
                </Row>
            </Container>

        </footer>
    )
}

export default Footer

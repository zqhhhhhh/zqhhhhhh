import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Based on the template by{' '}<a href="https://github.com/Soumyajit4419" target="_blank" rel="noopener noreferrer" className="custom_link">Soumyajit4419</a></h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>© {year} Qianhui Zheng</h3>
        </Col>
        <Col md="4" className="footer-body">
          <h3>Last Updated: July 12, 2025</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

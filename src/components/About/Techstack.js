import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMicrosoftexcel } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
} from "react-icons/di";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiMicrosoftexcel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiPowerbi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;

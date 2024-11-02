import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGithub,
  SiPostman,
  SiVercel,
  SiCanva,
  SiFigma,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Visual Studio Code */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      {/* GitHub */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      {/* Vercel */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      {/* Postman */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      {/* Canva */}
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>
      {/* Figma */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
    </Row>
  );
}

export default Toolstack;

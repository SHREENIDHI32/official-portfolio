import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg"; // C++
import { DiPython, DiJava, DiJavascript1, DiReact, DiNodejs, DiGit } from "react-icons/di"; // Python, Java, JavaScript, React, Node.js, Git
import { SiC, SiHtml5, SiCss3, SiAngular, SiExpress, SiMongodb, SiMysql } from "react-icons/si"; // C, HTML5, CSS3, Angular, Express.js, MongoDB, MySQL

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* C++ */}
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      {/* Python */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      {/* C */}
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
      </Col>
      {/* Java */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      {/* HTML5 */}
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      {/* CSS3 */}
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      {/* JavaScript */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      {/* React */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      {/* Angular */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular />
      </Col>
      {/* Node.js */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      {/* Express.js */}
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      {/* Git */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      {/* MongoDB */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      {/* MySQL */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
    </Row>
  );
}

export default Techstack;

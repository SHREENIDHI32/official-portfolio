import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shreenidhi </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
            <br />
            I am currently pursuing my 3rd year of Computer Science Engineering at Chennai Institute of Technology.
            <br />
            <br />
            
           
            I am an aspiring Software Development Engineer with a passion for problem-solving, having mastered Data Structures and Algorithms, and a strong interest in web and app development.
            <br />
            <br />

            Apart from coding, I love
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Teaching
            </li>
            <li className="about-activity">
              <ImPointRight /> Public speaking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            ""People may say you're not good at something—keep working consistently, and you'll master it.""{" "}
          </p>
          <footer className="blockquote-footer">Shreenidhi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React, { useState, useEffect } from "react";
import axios from "axios";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";

function Github() {
  const [leetcodeStats, setLeetcodeStats] = useState(null);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        const response = await axios.get(
          "https://leetcode-stats-api.herokuapp.com/your-username"
        );
        setLeetcodeStats(response.data);
      } catch (error) {
        console.error("Error fetching LeetCode stats:", error);
      }
    };

    fetchLeetCodeStats();
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>

      <GitHubCalendar
        username="your-github-username"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />

      {/* LeetCode Section */}
      {leetcodeStats && (
        <Col>
          <h2 className="project-heading" style={{ paddingTop: "20px" }}>
            My <strong className="purple">LeetCode Stats</strong>
          </h2>
          <p>Total Problems Solved: {leetcodeStats.totalSolved}</p>
          <p>Easy: {leetcodeStats.easySolved}</p>
          <p>Medium: {leetcodeStats.mediumSolved}</p>
          <p>Hard: {leetcodeStats.hardSolved}</p>
        </Col>
      )}
    </Row>
  );
}

export default Github;

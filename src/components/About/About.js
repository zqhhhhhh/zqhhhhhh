import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import myImg from "../../Assets/Qianhui2.jpg";
import Toolstack from "./Toolstack";
import Home2 from "../Home/Home2";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />

      {/* Introduction */}
      <Container className="mb-5">
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={8} style={{ paddingTop: "10px", paddingBottom: "50px" }}>
            <h1 style={{ fontSize: "2.6em" }}>
              Nice to <span className="purple"> meet </span> you!
            </h1>
            <p className="home-about-body">
              I'm an undergraduate student pursuing a dual-degree program between the{" "}
              <a className="custom_link" href="https://umich.edu">University of Michigan</a> and{" "}
              <a className="custom_link" href="https://en.sjtu.edu.cn">Shanghai Jiao Tong University</a>,
              earning a
              <b className="purple"> B.S.E. in Computer Science </b> from UMich and a
              <b className="purple"> B.Eng. in Mechanical Engineering</b> from SJTU.
              <br />
              <br />
              This interdisciplinary education allows me to integrate hardware and software perspectives across engineering domains.
              <br />
              <br />
              I'm fluent in tools and languages such as
              <b className="purple"> C/C++, Python, JavaScript, and SolidWorks.</b>
              <br />
              <br />
              My current research interest lies in
              <b className="purple"> Human-Computer Interaction (HCI),</b>{" "}
              under the supervision of Professor{" "}<a className="custom_link" href="https://junyizhu.com">Junyi Zhu</a>.
            </p>
          </Col>

          <Col md={4} style={{ paddingTop: "90px", paddingBottom: "50px" }}>
            <Tilt>
              <img
                src={myImg}
                className="img-fluid rounded-circle mx-auto d-block"
                alt="myImg"
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                  boxShadow: "0 0 20px rgba(192, 159, 255, 0.5)",
                }}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>

      {/* Education */}
      <Container>
        <h1 style={{ fontSize: "2.5em" }}>
          <span className="purple"> Education </span> Bakground
        </h1>
        <Row className="cv-section">
          <Col md={12}>
            <ul>
              <li>
                <strong>University of Michigan</strong> – B.S.E. in Computer Science (2022–2025)
              </li>
              <li>
                <strong>Shanghai Jiao Tong University</strong> – B.Eng. in Mechanical Engineering (2020–2025)
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Honors */}
      <Container>
        <h2 className="project-heading">
          <strong className="purple">Honors & Awards</strong>
        </h2>
        <Row className="cv-section">
          <Col md={12}>
            <ul>
              <li>University of Michigan Dean’s Honor List</li>
              <li>SJTU Outstanding Student Scholarship</li>
              <li>Top 10% Academic Achievement (SJTU)</li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Projects */}
      <Container>
        <h2 className="project-heading">
          <strong className="purple">Projects</strong>
        </h2>
        <Row className="cv-section">
          <Col md={12}>
            <ul>
              <li>
                <strong>Transformable Terrain Vehicle</strong> – Designed a multifunctional robot capable of stair climbing and sand traversal.
              </li>
              <li>
                <strong>Soft Robotic Hand</strong> – Built and tested an air-actuated hand for grasping experiments.
              </li>
              <li>
                <strong>Search Engine with Web Crawler</strong> – Implemented multi-threaded crawling and ranking logic.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Activities */}
      <Container>
        <h2 className="project-heading">
          <strong className="purple">Activities</strong>
        </h2>
        <Row className="cv-section">
          <Col md={12}>
            <ul>
              <li>Student Mentor – UM-SJTU Joint Institute</li>
              <li>Co-organizer – HCI Reading Group</li>
              <li>Pianist – University Piano Ensemble</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;

// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
// import Github from "./Github";
// import Techstack from "./Techstack";
// import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";
// import Toolstack from "./Toolstack";

// function About() {
//   return (
//     <Container fluid className="about-section">
//       <Particle />
//       <Container>
//         <Row style={{ justifyContent: "center", padding: "10px" }}>
//           <Col
//             md={7}
//             style={{
//               justifyContent: "center",
//               paddingTop: "30px",
//               paddingBottom: "50px",
//             }}
//           >
//             <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
//               Know Who <strong className="purple">I'M</strong>
//             </h1>
//             <Aboutcard />
//           </Col>
//           <Col
//             md={5}
//             style={{ paddingTop: "120px", paddingBottom: "50px" }}
//             className="about-img"
//           >
//             <img src={laptopImg} alt="about" className="img-fluid" />
//           </Col>
//         </Row>
//         <h1 className="project-heading">
//           Professional <strong className="purple">Skillset </strong>
//         </h1>

//         <Techstack />

//         <h1 className="project-heading">
//           <strong className="purple">Tools</strong> I use
//         </h1>
//         <Toolstack />

//         <Github />
//       </Container>
//     </Container>
//   );
// }

// export default About;

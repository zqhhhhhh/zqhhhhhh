import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import qraftEngineImg from "../../Assets/Projects/Qraft.png";
import moxartImg from "../../Assets/Projects/MoXaRt.webp";
import searchEngineImg from "../../Assets/Projects/Search_Engine.png";
import edgeOfGravityImg from "../../Assets/Projects/Edge_of_Gravity.jpg";
import noRoomForChaosImg from "../../Assets/Projects/No_Room_for_Chaos.jpg";

function Projects() {
  const edgeOfGravityBooklet = `${process.env.PUBLIC_URL}/projects/Edge_of_Gravity_booklet.pdf`;
  const noRoomForChaosPoster = `${process.env.PUBLIC_URL}/projects/No_Room_for_Chaos_poster.pdf`;
  const noRoomForChaosTrailer = `${process.env.PUBLIC_URL}/projects/No_Room_for_Chaos_trailer.mp4`;

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Portfolio</strong>
        </h1>
        <p style={{ color: "white" }}>
          A quick view of the systems, products, and research work I have built or contributed to.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qraftEngineImg}
              title="Qraft Engine"
              description="A 2D game engine built with C++17, Lua, LuaBridge, GLM, SDL2, and Box2D, featuring actor-component architecture, scene loading, rigidbody physics, raycasting, an EventBus system, a particle system, and an ImGui-based scene editor."
              links={[
                { label: "GitHub", href: "https://github.com/zqhhhhhh/Qraft-Engine", kind: "github" },
                { label: "Demo", href: "https://www.youtube.com/watch?v=6ty8wd_-XEU", kind: "web" },
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moxartImg}
              title="MoXaRt"
              description="A real-time XR system that uses audio-visual cues to separate overlapping voices and instruments in complex environments. I contributed to the synchronized dataset, end-to-end evaluation pipeline, and system-level optimization for this CHI 2026 accepted work."
              links={[
                { label: "Paper", href: "https://arxiv.org/abs/2603.10465", kind: "web" },
                { label: "Demo", href: "https://drive.google.com/file/d/19JB9B2XUYLPcUVD_z5CPuLbmsacZjFue/view?usp=sharing", kind: "web" },
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={searchEngineImg}
              title="Search Engine System"
              description="A large-scale search engine built in C++ from scratch over 30M+ webpages and 240GB of data, from crawling and indexing to constraint solving, retrieval, ranking, and frontend serving. I worked on the multithreaded crawler and the high-performance inverted index."
              links={[
                { label: "Demo", href: "https://drive.google.com/file/d/14IXclVzGSuWGfr02a0Ca66xePWN0XvMg/view?usp=sharing", kind: "web" },
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={edgeOfGravityImg}
              title="Edge of Gravity"
              description="A browser-based paddle game developed in Elm, highlighting gameplay design, interaction flow, and clean functional programming for web deployment."
              links={[
                { label: "Play", href: "https://focs.ji.sjtu.edu.cn/silverfocs/demo/2023/p1team01/", kind: "web" },
                { label: "Booklet", href: edgeOfGravityBooklet, kind: "web" },
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noRoomForChaosImg}
              title="No Room for Chaos"
              description="A roguelike shooting web game implemented in Elm, focused on engaging interaction loops, lightweight browser gameplay, and polished visual presentation."
              links={[
                { label: "Play", href: "https://focs.ji.sjtu.edu.cn/silverfocs/demo/2023/p2team01/", kind: "web" },
                { label: "Trailer", href: noRoomForChaosTrailer, kind: "web" },
                { label: "Poster", href: noRoomForChaosPoster, kind: "web" },
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

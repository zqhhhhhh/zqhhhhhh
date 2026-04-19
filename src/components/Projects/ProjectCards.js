import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const links = props.links || [];

  const getIcon = (link) => {
    const label = (link.label || "").toLowerCase();

    if (link.kind === "github") return <BsGithub />;
    if (label.includes("play")) return <span role="img" aria-label="game">🎮</span>;
    if (label.includes("paper")) return <span role="img" aria-label="paper">📄</span>;
    if (label.includes("demo") || label.includes("trailer")) {
      return <span role="img" aria-label="video">▶️</span>;
    }
    if (label.includes("poster")) return <span role="img" aria-label="poster">🖼️</span>;
    if (label.includes("booklet")) return <span role="img" aria-label="booklet">📘</span>;

    return <span role="img" aria-label="link">🔗</span>;
  };

  return (
    <Card className="project-card-view">
      {props.imgPath && <Card.Img variant="top" src={props.imgPath} alt={props.title} />}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {links.map((link, index) => (
            <Button
              key={`${props.title}-${index}`}
              variant="primary"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {getIcon(link)} &nbsp;
              {link.label}
            </Button>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;

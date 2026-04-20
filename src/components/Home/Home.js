// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom"; 
// import { BiChevronDown } from "react-icons/bi";
// import homeLogo from "../../Assets/Tree.jpg";
// import Profile from "../../Assets/Qianhui.jpg";
// import homeLogo2 from "../../Assets/Freedom.jpg";
// import Particle from "../Particle";
// import Home2 from "./Home2";
// import Type from "./Type";

// function Home() {
//   return (
//     <section>
//       <Container fluid className="home-section" id="home">
//         <Particle />
//         <Container className="home-content">
//           <Row>
//             <Col md={6} className="home-header">
//               <h1 style={{ paddingBottom: 15 }} className="heading">
//                 Hi There!{" "}
//                 <span className="wave" role="img" aria-labelledby="wave">
//                   👋🏻
//                 </span>
//               </h1>

//               <h1 className="heading-name">
//                 I'M
//                 <strong className="main-name"> Qianhui Zheng</strong>
//               </h1>

//               <div style={{ padding: 50, textAlign: "left" }}>
//                 <Type />
//               </div>
//             </Col>

//             <Col md={6} style={{ paddingBottom: 20 }}>
//               <img
//                 src={homeLogo}
//                 alt="home pic"
//                 className="img-fluid"
//                 style={{ maxHeight: "400px" }}
//               />
//             </Col>
//           </Row>
//         </Container>
//         <Row className="justify-content-center">
//             <Col md="auto">
//               <Link to="/about" className="page-flip-link">
//                 <span className="page-flip-symbol">&#xFE3E;</span>
//               </Link>
//             </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import homeLogo from "../../Assets/Tree.jpg";
import Particle from "../Particle";
import Type from "./Type";

function Home() {
  const navigate = useNavigate();
  const [scrollTriggered, setScrollTriggered] = useState(false);
  const startYRef = useRef(null); // 记录起始滑动位置
  const symbolRef = useRef(null); // 图标引用

  const triggerScrollToAbout = () => {
    if (!scrollTriggered) {
      setScrollTriggered(true);
      if (symbolRef.current) {
        symbolRef.current.classList.add("active-glow");
        setTimeout(() => {
          navigate("/about");
        }, 300);
      } else {
        navigate("/about");
      }
    }
  };

  // 手势与滚轮监听
  useEffect(() => {
    const threshold = 50;
    let startY = null;

    const triggerScrollToAbout = () => {
      if (!scrollTriggered) {
        setScrollTriggered(true);
        if (symbolRef.current) {
          symbolRef.current.classList.add("active-glow");
          setTimeout(() => {
            navigate("/about");
          }, 300);
        } else {
          navigate("/about");
        }
      }
    };

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const endY = e.changedTouches[0].clientY;
      if (startY !== null && startY - endY < -threshold) {
        e.preventDefault();
        triggerScrollToAbout();
      }
    };

    const handleWheel = (e) => {
      if (e.deltaY > 80) {
        e.preventDefault();
        triggerScrollToAbout();
      }
    };

    const handleKeyDown = (e) => {
      const keys = ["Enter", " ", "ArrowDown"];
      if (keys.includes(e.key)) {
        e.preventDefault();
        triggerScrollToAbout();
      }
    };

    const handleMouseDown = (e) => {
      startYRef.current = e.clientY;
    };

    const handleMouseUp = (e) => {
      const endY = e.clientY;
      if (startYRef.current !== null && startYRef.current - endY < -50) {
        triggerScrollToAbout();
      }
    };

    // 🔗 注册所有监听器
    document.addEventListener("touchstart", handleTouchStart, { passive: false });
    document.addEventListener("touchend", handleTouchEnd, { passive: false });
    document.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [scrollTriggered, navigate]);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 className="heading" style={{ paddingBottom: 15 }}>
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>
              <h1 className="heading-name">
                I'M <strong className="main-name">Qianhui Zheng</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={6} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home"
                className="img-fluid"
                style={{ maxHeight: "400px" }}
              />
            </Col>
          </Row>
        </Container>

        {/* 翻页按钮 */}
        <Row className="justify-content-center">
          <Col md="auto">
            <Link
              to="/about"
              className="page-flip-link"
              onClick={(e) => {
                e.preventDefault();
                triggerScrollToAbout();
              }}
              onKeyDown={(e) => {
                if (["Enter", " ", "ArrowDown"].includes(e.key)) {
                  e.preventDefault();
                  triggerScrollToAbout();
                }
              }}
            >
              <div ref={symbolRef} className="page-flip-symbol">
                &#xFE3E;
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;

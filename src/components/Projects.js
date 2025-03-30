import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import p1 from "../assets/img/p1.jpg";
import p2 from "../assets/img/p2.jpg";
import p3 from "../assets/img/p3.jpg";
import p4 from "../assets/img/p4.jpg";
import p5 from "../assets/img/p5.jpg";
import p6 from "../assets/img/p6.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Trustworthiness Prediction System",
      description: "ML model using Capsule BiLSTM to predict product trustworthiness from reviews. Flask API for predictions.",
      imgUrl: p1,
    },
    {
      title: "Food Scraper",
      description: "Webscraper to find top restaurants in the city using Beautiful Soup and Scraper.api.",
      imgUrl: p2,
    },
    {
      title: "Music Recommendation System",
      description: "Recommends similar music using NLP, tokenization, ML, and Spotify API.",
      imgUrl: p3,
    },
    {
      title: "Nebula Space Organization",
      description: "Developed software for GRB-detecting satellite, enhancing research speed by 27%.",
      imgUrl: p4,
    },
    {
      title: "Cybersecurity Research",
      description: "Injected custom DNS and analyzed network traffic using Cisco Umbrella and Wireshark.",
      imgUrl: p5,
    },
    {
      title: "Hackathon and Open Source Contributions",
      description: "Achieved 2nd in RUSH AI Hackathon, contributed to Hacktoberfest2024 with 4/4 PR/MR requests accepted.",
      imgUrl: p6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of the projects I have worked on, demonstrating skills in web scraping, machine learning, cybersecurity, and open source contributions.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};

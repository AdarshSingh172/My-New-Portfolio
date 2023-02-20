import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import emart from "../assets/img/emart.png";
import music from "../assets/img/music.png";
import myportf from "../assets/img/myportf.png";
import service from "../assets/img/service-clone.png";
import save from "../assets/img/save.png";
import netflix from "../assets/img/Netflix.png";
import frm from "../assets/img/frm.png";
import toll from "../assets/img/toll.png";
import bdy from "../assets/img/bdy.png";
import myportfolio from "../assets/img/myportfolio.png";
import instagram from "../assets/img/instagram.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      url: "https://emart-172.netlify.app/",
      title: "Emart Store",
      description: "Ecommerce Web-app",
      imgUrl: emart,
    },
    {
      url: "https://music-app-main.netlify.app/",
      title: "Go Music",
      description: "Music Portfolio Web-app",
      imgUrl: music,
    },
    {
      url: "https://myportfolio172.netlify.app/",
      title: "Freelance Portfolio",
      description: "Portfolio for Freelancers",
      imgUrl: myportf,
    },
    {
      url: "https://service-clone172.netlify.app/",
      title: "Service-clone",
      description: "service-clone-app",
      imgUrl: service,
    },
    {
      url: "https://pocket-chrome172.netlify.app.app/",
      title: "pocket-chrome",
      description: "Multiplayer UNO game for 2 players",
      imgUrl: save,
    },
    {
      url: "https://netflix-clone172.netlify.app/",
      title: "Netflix",
      description: "Exact Clone of Netflix Web-app",
      imgUrl: netflix,
    },
    {
      url: "https://formui172.netlify.app/",
      title: "Form-UI",
      description: "Form-UI Web-app",
      imgUrl: frm,
    },
    {
      title: "Toll",
      description: "toll-management",
      imgUrl: toll,
    },
    {
      title: "are you lucky",
      description: "MARK-11-Birthday-Luck",
      imgUrl: bdy,
    },
    {
      title: "My Portfolio",
      description: "my first portfolio",
      imgUrl: myportfolio,
    },
    {
      title: "instagram",
      description: "Instagram-logo is created by using HTML & CSS",
      imgUrl: instagram,
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
                <p>“There are three responses to a piece of design — yes, no, and WOW!<br></br>Wow is the one to aim for.”</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.slice(0,5).map((project, index) => {
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
                    <Tab.Pane eventKey="second">
                      <Row>
                    {
                          projects.slice(5,8).map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                      <Row>
                      {
                          projects.slice(8,projects.length).map((project, index) => {
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
      <img className="background-image-right" src={colorSharp2} alt="color"></img>
    </section>
  )
}

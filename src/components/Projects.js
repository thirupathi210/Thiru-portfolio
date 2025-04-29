import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/crptm.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import screen from "../assets/img/screen.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>I’ve worked on projects across different industries and enjoy building clean, scalable code and pixel-perfect interfaces.</p>
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
                          <Col>
                            <img src={projImg2} alt="Business Startup" style={{ width: "345px", height: "260px", objectFit: "cover", padding: "10px" }} />
                          </Col>
                          <Col>
                            <img src={projImg3} alt="Business Startup" style={{ width: "345px", height: "260px", objectFit: "cover", padding: "10px" }} />
                          </Col>
                          <Col>
                            <img src={projImg1} alt="Business Startup" style={{ width: "345px", height: "260px", objectFit: "cover", padding: "10px" }} />
                          </Col>
                          <Col>
                            <img src={screen} alt="Business Startup" style={{ width: "345px", height: "260px", objectFit: "cover", padding: "10px" }} />
                          </Col>
                          <Col>
                            <img src={projImg2} alt="Business Startup" style={{ width: "345px", height: "260px", objectFit: "cover", padding: "10px" }} />
                          </Col>
                          <Col>
                            <img src={projImg3} alt="Business Startup" style={{ width: "345px", height: "260px", objectFit: "cover", padding: "10px" }} />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>I’m a passionate web developer with over 3 years of experience creating websites and web applications. I enjoy turning ideas into interactive digital experiences. My main expertise lies in front-end development, but I also have a working knowledge of back-end technologies.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>I’ve worked on projects across different industries and enjoy building clean, scalable code and pixel-perfect interfaces.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

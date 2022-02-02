import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Col, Container, Row } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';

const About = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename="favicon1.png" />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  Crafting user-friendly interfaces in React with a keen interest in performance
                  profiling.
                </p>
                <p className="about-wrapper__info-text">
                  Three years of experience in web development working on Luxembourg&apos;s most
                  popular websites.
                </p>
                <p className="about-wrapper__info-text">
                  <u>Skills:</u> JavaScript, ReactJS, Redux, Node.js, SQL, PHP, HTML/CSS
                </p>
                <p className="about-wrapper__info-text">
                  <u>Learning:</u> TypeScript, Go
                </p>
                <span className="d-flex mt-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--resume"
                    href="https://dogukanermis.github.io/ermislu/CV_Dogukan_Ermis_React_Developer.pdf"
                  >
                    Link to my CV
                  </a>
                </span>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

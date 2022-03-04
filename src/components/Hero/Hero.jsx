import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Header = () => (
  <section id="hero" className="jumbotron">
    <Container>
      <h1 className="hero-title">
        <span className="text-color-main">Dogukan Ermis</span>
        <br />
        Software Engineer
      </h1>
      <p className="hero-cta">
        <Link to="about" className="cta-btn cta-btn--hero">
          Know more
        </Link>
      </p>
    </Container>
  </section>
);

export default Header;

import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { nanoid } from 'nanoid';

const Footer = () => {
  const networks = [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/dogukan-ermis/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/dogukanermis/',
    },
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto:contact@ermis.lu',
    },
  ];

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero">
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://ermis.lu'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <p className="footer__text">
          © {new Date().getFullYear()} - Developed by{' '}
          <a href="https://ermis.lu" target="_blank" rel="noopener noreferrer">
            Dogukan Ermis
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

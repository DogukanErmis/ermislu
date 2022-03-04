import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const Index = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Dogukan Ermis | Software Engineer</title>
      <html lang="en" />
      <meta
        name="description"
        content="Crafting user-friendly interfaces with an emphasis on performance and security. Worked on Luxembourg's most popular websites."
      />
    </Helmet>
    <App />
  </>
);

export default Index;

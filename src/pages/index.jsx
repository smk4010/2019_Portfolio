import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Services from '../sections/Services';

const IndexPage = () => (
  <Layout>
    <Landing />
    <About />
    <Projects />
    <Services />
  </Layout>
);

export default IndexPage;

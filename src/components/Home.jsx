import React from 'react';
import Projects from './Projects.jsx';
import About from './About.jsx';

const Home = () => {
  return (
    <div>
      <section class="section container">
        <About />
      </section>
      <section class="section container">
        <Projects />
      </section>
    </div>
  )
};

export default Home;
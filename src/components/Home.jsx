import React from 'react';
import Projects from './Projects.jsx';
import About from './About.jsx';
import Characters from './Characters.jsx';

const Home = () => {
  return (
    <div>
      <section class="section container">
        <About />
      </section>
      <section class="section container">
        <Projects />
      </section>
      {/* <section class="section container">
        <Characters />
      </section> */}
    </div>
  )
};

export default Home;
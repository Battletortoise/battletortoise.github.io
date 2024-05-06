import React from 'react';
import Projects from './Projects.jsx';
import About from './About.jsx';
import Characters from './Characters.jsx';
import Contact from './Contact.jsx';

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
      <section class="section container">
        <Contact />
      </section>
    </div>
  )
};

export default Home;
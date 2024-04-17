import React from 'react';
import MVP from './projects/MVP.jsx';
import BlueOcean from './projects/BlueOcean.jsx';
import FEC from './projects/FEC.jsx';

const Projects = () => {
  return (
    <div class="content">
      <h1 className="section_heading">Projects</h1>
      <section class="section">
        <BlueOcean />
      </section>
      <section class="section">
        <FEC />
      </section>
      <section class="section">
        <MVP />
      </section>
    </div>
  )
}

export default Projects;
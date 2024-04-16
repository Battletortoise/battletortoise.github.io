import React, { useState } from 'react';
import Projects from './components/Projects.jsx';
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
        <img src="/assets/backless_logo.png" alt="Navbar Image" width="28" height="28" />
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            Home
          </a>
          <a class="navbar-item">
            Projects
          </a>
          <a class="navbar-item">
            Education
          </a>
        </div>
      </div>
    </nav>
    <section class="section container">
      <div class="is-flex">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <h1>About Me</h1>
              <p>Hello! I'm <strong>Wyatt Grayson Fulbright</strong>, a Web-developer and Author dedicated to bridging the gap between concept and reality</p>
              <p> </p>
            </div>
          </div>
        </div>
          <figure class="image is-2by2">
            <img src="/assets/backless_logo.png" alt="Placeholder image"/>
          </figure>
      </div>
    </section>
    <section class="section">
      <Projects />
    </section>
    </>
  )
}

export default App

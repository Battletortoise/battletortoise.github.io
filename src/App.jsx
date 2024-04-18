import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import './App.css'

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
            <Link to="/">
              Home
            </Link>
          </a>
          <a class="navbar-item">
            <Link to="about">
              About
            </Link>
          </a>
          <a class="navbar-item">
            <Link to="projects">
              Projects
            </Link>
          </a>
          {/* <a class="navbar-item">
            Education
          </a> */}
        </div>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={
          <Home />
      }/>
      <Route path="about" element={
        <section class="section container">
          <About />
        </section>
      }/>
      <Route path="projects" element={
        <section class="section">
          <Projects />
        </section>
      } />
    </Routes>
    </>
  )
}

export default App

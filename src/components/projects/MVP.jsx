import React from 'react';

const MVP = () => {
  return (
    <div class="container">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <h1>Granblue Grid Designer</h1>
            <p>The GGD is a personal project I made for the mobile game 'Granblue Fantasy'. It simulates the grid building aspect of gbf, calculating final grid stats through a series of algorythms</p>
            <h3>Stack</h3>
            <ul>
              <li>Javascript</li>
              <li>React</li>
              <li>Bulma CSS</li>
              <li>Webpack</li>
            </ul>
          </div>
        </div>
        <footer class="card-footer">
          <a class="card-footer-item" href="https://github.com/Battletortoise/Granblue-Grid-Designer" target="_blank">Github</a>
        </footer>
      </div>
    </div>
  )
}

export default MVP;
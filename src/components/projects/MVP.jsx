import React from 'react';

const MVP = () => {
  return (
    <div class="container">
      <div class="card">
        <div class="is-flex">
          <div class="card-content">
            <div class="content">
              <h1>Granblue Grid Designer</h1>
              <p>The GGD is a personal project I made for the mobile game 'Granblue Fantasy'. It simulates the grid building aspect of gbf, calculating final grid stats through a series of algorythms</p>
              <h3>Stack</h3>
              <ul class="section is-flex is-multiline">
                <figure class="image is-64x64 m-auto">
                  <img src="/assets/icons/javascript.svg"></img>
                </figure>
                <figure class="image is-64x64 m-auto">
                  <img src="/assets/icons/react.svg"></img>
                </figure>
                <figure class="image is-64x64 m-auto">
                  <img src="/assets/icons/bulma.svg"></img>
                </figure>
                <figure class="image is-64x64 m-auto">
                  <img src="/assets/icons/postgresql.svg"></img>
                </figure>
              </ul>
            </div>
          </div>
          <div class="card-content">
            <div class="card-image">
              <figure class="image is 128x128">
                <img src="/assets/GGD.gif" alt="Placeholder image" />
              </figure>
            </div>
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
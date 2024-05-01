import React from 'react';

const BlueOcean = () => {
  const style = {
    width: '20%',
    height: 'auto',
  };
  const imgstyle = {
    backgroundImage: 'url(src/assets/BlueOcean.gif)',
  };
  return (
    <div class="container">
      <div class="card">
        <div class="is-flex">
          <div class="card-content">
            <div class="content">
              <h1>Study Stack</h1>
              <p>This project is a simple-to-use flashcard app designed to remove the fluff from modern study sites. Utlizes React-Konva to create annotations on flash cards to more accurately create whatever they need to study</p>
              <h3>Stack</h3>
              <ul class="section is-flex is-multiline">
                <figure class="image is-64x64 m-auto">
                  <img src="/assets/icons/typescript-icon.svg"></img>
                </figure>
                <figure class="image is-64x64 m-auto">
                  <img src="/assets/icons/react.svg"></img>
                </figure>
                <figure class="image is-64x64 m-auto">
                  <img src="/assets/icons/react-router.svg"></img>
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
          <div class="card-content gif">
            <div class="card-image">
              <figure class="image">
                <img src="/assets/BlueOcean.gif" alt="Placeholder image" />
              </figure>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <a class="card-footer-item" href="https://github.com/mothras-cloud-solutions/study-stack" target="_blank">Github</a>
          <a class="card-footer-item" href="https://study-stack-production.up.railway.app/" target="_blank">Study Stack</a>
        </footer>
      </div>
    </div>
  );
};

export default BlueOcean;
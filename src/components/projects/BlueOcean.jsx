import React from 'react';

const BlueOcean = () => {
  const style={
    width: '20%',
    height: 'auto',
  };
  const imgstyle={
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
              <ul>
                <li>Typescript</li>
                <li>React</li>
                <li>React-Konva</li>
                <li>Express</li>
                <li>Bulma CSS</li>
                <li>Railway</li>
              </ul>
            </div>
          </div>
          <div class="card-content">
            <div class="card-image">
              <figure class="image">
                <img src="src/assets/BlueOcean.gif" alt="Placeholder image" />
              </figure>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <a class="card-footer-item" href="https://github.com/mothras-cloud-solutions/study-stack" target="_blank">Github</a>
        </footer>
      </div>
    </div>
  );
};

export default BlueOcean;
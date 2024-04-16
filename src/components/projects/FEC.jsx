import React from 'react';

function FEC() {
  return (
    <div class="container">
      <div class="card">
        <div class="is-flex">
          <div class="card-content">
            <div class="content">
              <h1>Atelier</h1>
              <p>Atelier was a modernized product page for an e-commerce site. It allows clients to save items in both their cart and an 'outfit' caraousel to keep users from going to a new page just to compare items</p>
              <h3>Stack</h3>
              <ul>
                <li>Javascript</li>
                <li>React</li>
                <li>Express</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
          <div class="card-content">
            <div class="card-image">
              <figure class="image is-4by4">
                <img src="/assets/FECgif.gif" alt="Placeholder image"/>
              </figure>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <a class="card-footer-item" href="https://github.com/Kentucky-Fried-Callback/Atelier-e-Commerce-Modernization" target="_blank">Github</a>
        </footer>
      </div>
    </div>
  );
}

export default FEC;
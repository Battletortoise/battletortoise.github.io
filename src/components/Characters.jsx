import React from 'react';
import characters  from '../data/characters.js';

const Characters = function () {
  return (
    <div class="container grid">
      {characters.map((character) => {
        return (
          <div class="card cell">
            <div class="card-content">
              <div class="card-image">
                <figure class="image is-96x96">
                  <img src={character.avatar}/>
                </figure>
              </div>
            </div>
            <div class="card-content content">
              <h3>{character.name}</h3>
            </div>
          </div>
        )
      })}
    </div>
  )
};

export default Characters;
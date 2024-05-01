import React from 'react';

const About = () => {
  return (
    <div class="is-flex">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <h1>About Me</h1>
            <p>Hello! My name is <strong>Wyatt Grayson Fulbright</strong>, a Web-developer and Author based in North Carolina. I have a passion for creativity and dedicate myself to bridging the gap between concept and reality. </p>
            <p>I am a North Carolina State university alumni, and have a Bachelors in Psychology & Cognitive Science. I worked on my writing all throughout until I graduated and was able to write my first book, The Seven Days of destruction. After that, I began learning Javascript and found a real passion in coding. To this day, I continue to push myself to learn and grow so that I can gain the skills to make dreams a reality.</p>
            <p>Im currently putting the final touches on the GGD, a companion app for Granblue Fantasy, a mobile web browser game based in japan, and getting it ready for deployment. I'm also in the early stages for building my first game, 'A New Nightmare', and writing out the story and pacing for that so stay tuned</p>
            <h2>Stack</h2>
            <ul class="section is-flex is-multiline">
              {/* <li>Javascript</li> */}
              <figure class="image is-64x64 m-auto">
                <img src="/assets/icons/javascript.svg"></img>
              </figure>
              {/* <figure class="image is-48x48">
                <img src="/assets/icons/mongodb-icon.svg"></img>
              </figure> */}
              <figure class="image is-64x64 m-auto">
                <img src="/assets/icons/nodejs-icon.svg"></img>
              </figure>
              <figure class="image is-64x64 m-auto">
                <img src="/assets/icons/postgresql.svg"></img>
              </figure>
              <figure class="image is-64x64 m-auto">
                <img src="/assets/icons/react.svg"></img>
              </figure>
            </ul>
            <ul class="is-flex section is-multiline">
              <figure class="image is-64x64 m-auto">
                <img src="/assets/icons/react-router.svg"></img>
              </figure>
              <figure class="image is-64x64 m-auto">
                <img src="/assets/icons/typescript-icon.svg"></img>
              </figure>
              <figure class="image is-64x64 m-auto">
                <img src="/assets/icons/aws-ec2.svg"></img>
              </figure>
            </ul>
          </div>
        </div>
      </div>
      <figure class="image is-2by2">
        <img src="/assets/backless_logo.png" alt="Placeholder image"/>
      </figure>
    </div>
  )
};

export default About;

// <li>Typescript</li>
// <li>React</li>
// <li>Express</li>
// <li>PostgreSQL</li>
// <li>MongoDB</li>
// <li>AWS</li>
// <li>Railroad</li>
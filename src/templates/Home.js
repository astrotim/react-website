import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <main>
        <h1>S3 and Cloudfront</h1>
        <h2>Deployed with Travis CI - testing AWSCLI</h2>
        <p>
          I‘m a front end web developer at the ABC, based in Brisbane. I am currently working on a project to build a new platform for the front end with server-rendered React.
        </p>
        <div className="hero-wrapper">
          <img
            className="hero-image"
            src="https://res.cloudinary.com/astrotim/image/upload/v1494763134/hero_upyo8o.jpg"
            alt="Client project for Taste of Perth"
          />
        </div>
        <p>
          I build high quality, handcrafted products with modern best practices.
        </p>
        <blockquote>
          Tim has been an invaluable asset to the Taste team... [he is] great to work with, his service exceptional and we highly recommend working with him.
          <footer>
            Laura Arnold, Marketing Manager, Taste Festivals Australia
          </footer>
        </blockquote>
      </main>
    );
  }
}

export default Home;

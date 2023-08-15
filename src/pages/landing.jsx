import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/landing.css';

const Landing = () => {
  return (
    <div>
      <header>
        <nav>
          <ul class="navbar-content">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home" class="homeSection">
          <img src="img/logo.png" alt="Logo" />
        </section>
        <section id="services" class="servicesSection">
          <h2 class="servicesTitle">Services</h2>
          <Link to="/webDev">
            <div class="image-container">
              <img src="img/WebDevelopment.jpg" alt="Imagen 1" class="gallery-image" />
                <p>Web Development</p>
            </div>
          </Link>
          <div class="image-container">
            <img src="img/AppDevelopment.jpg" alt="Imagen 2" class="gallery-image" />
              <p>App Development</p>
          </div>
          <div class="image-container">
            <img src="img/BusinessInteligence.jpg" alt="Imagen 3" class="gallery-image" />
              <p>Business Inteligence</p>
          </div>
          <div class="image-container">
            <img src="img/SoftwareDevelopment.jpg" alt="Imagen 4" class="gallery-image" />
              <p>Software Development</p>
          </div>
        </section>
        <section id="about" class="third-section">
          <div class="section-content">
            <div class="section-text">
              <h2>We believe in reinvention</h2>
              <p>We value data's power to drive business transformation. Using data analytics and machine learning, we understand client needs and challenges.
                This helps us create software solutions that address their unique problems and maximize their potential. We believe innovation and adaptability through data are crucial in today's changing world. </p>
            </div>
            <div class="section-image" >
              <img src="img/dataimage.png" alt="" />
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
};

export default Landing;
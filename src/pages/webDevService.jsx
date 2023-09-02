import React from 'react'
import '../styles/webDevService.css';

const WebDevService = () => {
  return (
    <div>
      <section class="first-section">
        <div class="section-content">
          <div class="section-image">
            <img src="img/sitedevelopment.png" alt="" />
          </div>
          <div class="section-text">
            <h1>Let's make your website</h1>
            <p>Are you ready to professionalize and expand your presence on social networks? Our talented team of developers will work to make your ideal website a reality. You will stand out from the competition with custom-made designs. Follow the steps below!</p>
          </div>
        </div>
      </section>
      <section class="step-by-step-section">
        <div>
          <h2 class="stepByStepClass">Step by Step</h2>
        </div>
        <div class="card-container">
          <div class="card">
            <img src="img/Tellusaboutyourpage.png" alt="Descripción de la imagen 1" />
              <h2>Tell us about your ideal page</h2>
          </div>

          <div class="card">
            <img src="img/Designandstructure.png" alt="Descripción de la imagen 2" />
              <h2>Design and structure</h2>
          </div>

          <div class="card">
            <img src="img/testing.png" alt="Descripción de la imagen 3" />
              <h2>Tests and fixes</h2>
          </div>

          <div class="card">
            <img src="img/finished.png" alt="Descripción de la imagen 4" />
              <h2>Finished page and online launch</h2>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WebDevService;
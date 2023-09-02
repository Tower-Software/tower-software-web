import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Space, Typography, Col } from 'antd';
import '../styles/landing.scss';
import ContactUsForm from '../components/contactUsForm';

const { Title, Paragraph } = Typography;
const { Meta } = Card;

const Landing = () => {
  return (
    <div>
      <section class="homeSection">
        <img src="img/logo.png" alt="Logo" />
      </section>

      <section id="services" className="servicesSection">
        <Title level={1}>Services</Title>
        <Space wrap style={{ justifyContent: "center", marginTop: 20 }}>
          <Link to="/webDev">
            <Card 
              className="serviceCard"
              hoverable
              cover={<img src="img/WebDevelopment.jpg" alt="Imagen 1" class="serviceImg" />}
            >
              <Meta title="Web Development" description="Go" />
            </Card>
          </Link>
          <Card  
            className="serviceCard"
            hoverable
            cover={<img src="img/AppDevelopment.jpg" alt="Imagen 2" class="serviceImg" />}
          >
           <Meta title="App Development" description="Go" />
          </Card>
          <Card   
            className="serviceCard"
            hoverable
            cover={<img src="img/BusinessInteligence.jpg" alt="Imagen 3" class="serviceImg" />}
          >
           <Meta title="Business Inteligence" description="Go" />
          </Card>
          <Card 
            className="serviceCard"
            hoverable
            cover={<img src="img/SoftwareDevelopment.jpg" alt="Imagen 4" class="serviceImg" />}
          >
           <Meta title="Software Development" description="Go" />
          </Card>
        </Space>
      </section>

      <section id="about" className="weBeliveInReinvetionSection">
        <Row>
          <Col md={24} xl={12}>
            <Title>We believe in reinvention</Title>
            <Paragraph>
              We value data's power to drive business transformation. Using data analytics and machine learning, we understand client needs and challenges.
              This helps us create software solutions that address their unique problems and maximize their potential. We believe innovation and adaptability through data are crucial in today's changing world. 
            </Paragraph>
          </Col>
          <Col md={24} xl={12}>
            <img className="reinventionImg" src="img/dataimage.png" alt="reinvention" />
          </Col>
        </Row>
      </section>

      <section id="contact" className="section">
        <Title level={1}>Contact Us</Title>
        <ContactUsForm />
      </section>
    </div>
  );
};

export default Landing;
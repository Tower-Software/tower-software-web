import { useRef } from 'react';
import { Space, Row, Col, Button } from 'antd';
import useScrollPercentage from '../hooks/scrollPercetage';
import { CSSTransition } from 'react-transition-group';
import '../styles/navBar.scss';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const nodeRef = useRef(null);
  const scrollPercentage = useScrollPercentage();
  const isBigLogoVisible = scrollPercentage > 20;

  const goHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate("/");
  }
  
  return (
    <div className="layoutHeader">
      <Row>
        <Col flex={2} />
        <CSSTransition nodeRef={nodeRef} in={isBigLogoVisible} timeout={200} classNames="rightToLeftFade" unmountOnExit>
          <Col flex={10}>
            <div ref={nodeRef}>
              <img src="img/logo.png" alt="Logo" className="logo" />
            </div>
          </Col>
        </CSSTransition>
        <Col flex={2}>
          <Space style={{ margin: "15px 10px 15px 0" }}>
            <Button className="navButton" size="large" onClick={goHome}>Home</Button>
            <Button className="navButton" size="large" href="#services">Services</Button>
            <Button className="navButton" size="large" href="#about">About Us</Button>
            <Button className="contactUsButton" size="large" href="#contact">Contact Us</Button>
          </Space>
        </Col>
        <CSSTransition nodeRef={nodeRef} in={isBigLogoVisible} timeout={200} classNames="rightToLeftFade" unmountOnExit>
          <Col flex={2} />
        </CSSTransition>
      </Row>
    </div>
  );
};

export default NavBar